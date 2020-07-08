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
    //

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
                        // console.log('onClose')
                      })
                    return { pos, name }
                  }
                }
              ) : []
        )

        const dataWitchImg = Object.assign(data, { img: JSON.stringify(imgs) })
        // @ts-ignore
        return ctx.prisma.product.create({ data: { ...dataWitchImg } })
          .then(res => {
            if (res === null) {
              throw Error('Invalid res NULL')
            }
            return res
          })
          .catch(err => console.log('EEEEEERRR', err))
      }
    })
    /*
    deleteOneProduct(
      where: ProductWhereUniqueInput!
  ): Product
    */
    t.field('deleteOneProduct', {
      type: 'Product',
      args: {
        where: arg({ type: 'ProductWhereUniqueInput', required: true })
      },
      // @ts-ignores
      resolve: async (parent, args, ctx) => {
        const { where } = args
        console.log('del', where)
        // @ts-ignore
        const prod = await ctx.prisma.product.delete({ where })
        // @ts-ignore
        const imgs = JSON.parse(prod.img)

        console.log('imgs', imgs)

        const imgsFileNames = imgs.map((i: any) => i['name'])

        console.log('imgsFileNames', imgsFileNames)

        await Promise.all(
          imgsFileNames ?
            imgsFileNames
              .map(
                async (file: string, ind: number) => {
                  if (!file) {
                    throw Error('No file Name')
                  }

                  fs.unlinkSync(path.join(__dirname, '../../uploads/'+file))

                }
              ) : []
        )
        return prod
      }
    })
  }
})
