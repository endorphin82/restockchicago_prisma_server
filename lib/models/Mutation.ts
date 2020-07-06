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
    t.crud.deleteOneProduct()

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

    // https://stackoverflow.com/questions/55216860/graphql-error-when-resolving-promises-during-file-upload
    t.field('uploadFiles', {
      type: 'File',
      list: true,
      args: {
        files: arg({ type: 'Upload', nullable: false, list: true }),
        product_id: intArg({ required: false })
      },
      resolve: async (parent, args) => {
        const { files } = await args
        const resFiles = Promise.all(
          files
            .map(
              async (file) => {
                const { createReadStream, filename } = await file
                if (!filename) {
                  throw Error('Invalid file Stream')
                } else if (filename) {
                  const readStream = createReadStream(filename)
                  const newName = `${args.product_id}_${filename}`
                  readStream
                    .pipe(fs.createWriteStream(path.join(__dirname, '../../uploads/', newName)))
                    .on('close', () => {
                      console.log('onClose')
                    })
                  return {
                    uid: String(Date.now()),
                    name: newName,
                    status: 'done',
                    url: `www.${newName}`
                  }
                }
              }
            )
        )
        // console.log('resFiles', resFiles)
        console.log('------', resFiles)
        return resFiles.then(res => {
          console.log('res---', res)
          return res
        }).catch(err => {
          console.log('err---', err)
          return err
        })
      }
    })

    t.string('uploadFile', {
      args: {
        file: arg({ type: 'Upload', nullable: false }),
        product_id: intArg({ required: false })
      },
      // @ts-ignore
      resolve: async (parent, args) => {
        const {
          createReadStream,
          filename,
          mimetype,
          encoding
        } = await args.file
        console.log('args.file', args.file)
        if (!filename) {
          throw Error('Invalid file Stream')
        } else if (filename) {
          console.log('filename', filename)
          if (mimetype.startsWith('image')) {
            const readStream = createReadStream(filename)
            readStream
              .pipe(
                fs.createWriteStream(
                  path.join(__dirname, '../../uploads/', `${args.product_id}_${filename}`)
                )
              )
              .on('close', (res: any) => {
                console.log('close ', res)
              })
            return 'file upload successful'
          } else {
            return 'please select image'
          }
        }
      }
    })
  }
})
