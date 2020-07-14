import { objectType, arg, intArg } from '@nexus/schema'
import { Upload } from './Upload'

import path from 'path'
import fs from 'fs'

export const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.crud.createOneCategory()
    t.crud.updateOneCategory()
    t.crud.deleteOneCategory()

    t.crud.createOneProduct({ alias: '_createOneProduct' })
    t.crud.updateOneProduct()
    t.crud.deleteOneProduct({ alias: '_deleteOneProduct' })

    t.field('createOneProduct', {
      type: 'Product',
      args: {
        data: arg({ type: 'ProductCreateInput', required: true }),
        files: arg({ type: 'Upload', list: true, nullable: true })
      },
      // @ts-ignores
      resolve: async (parent, args, ctx) => {
        const { data, files } = args

        const imgs = await Promise.all(
          files ?
            files
              .map(
                async (file, ind) => {
                  const { createReadStream, filename, mimetype } = await file
                  if (!filename) {
                    throw Error('Invalid file Stream')
                  } else if (filename && mimetype.startsWith('image')) {
                    const readStream = createReadStream(filename)
                    const pos = ind
                    const name = `${String(Date.now())}${filename}`
                    readStream
                      .pipe(fs.createWriteStream(path.join(__dirname, '../../uploads/', name)))
                      .on('close', () => {
                      })
                    return { pos, name }
                  }
                }
              ) : []
        )
        const dataWitchImg = {
          ...data,
          ...((imgs.length == 0) ? {} : { img: JSON.stringify(imgs) })
        }
        const imgsFileNames = imgs.map((i: any) => i['name'])
        // @ts-ignore
        return ctx.prisma.product.create({ data: { ...dataWitchImg } })
          .then(res => {
            if (res === null) {
              throw Error('Invalid res NULL')

            }
            return res
          })
          .catch(async err => {
            await Promise.all(
              imgsFileNames
                .map(
                  async (file: string) => {
                    if (!file) {
                      throw Error('No file Name')
                    }
                    fs.unlink(path.join(__dirname, '../../uploads/' + file), (err) => {
                      if (err) console.log(err)
                    })
                  }
                )
            )
            console.log('EEEEEERRR', err)
          })
      }
    })

    t.field('deleteOneProduct', {
      type: 'Product',
      args: {
        where: arg({ type: 'ProductWhereUniqueInput', required: true })
      },
      // @ts-ignores
      resolve: async (parent, { where }, ctx) => {
        console.log('del---------')
        // @ts-ignore
        const prod = await ctx.prisma.product.delete({ where })
        console.log('del++++++')
        // @ts-ignore
        const imgs = JSON.parse(prod.img)
        if (imgs) {
          const imgsFileNames = imgs.map((i: any) => i['name'])
          await Promise.all(
            imgsFileNames
              .map(
                async (file: string) => {
                  if (!file) {
                    throw Error('No file Name')
                  }
                  fs.unlink(path.join(__dirname, '../../uploads/' + file), (err) => {
                    if (err) console.log(err)
                  })
                }
              )
          )
        } else
          console.log('imgsFileNames---')
        return prod
      }
    })
  }
})
