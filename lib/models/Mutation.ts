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
    t.crud.createOneProduct()
    t.crud.updateOneProduct()
    t.crud.deleteOneProduct()
    // t.crud.createOneUpload()
    //   createOneImageProd(
    //     data: ImageProdCreateInput!
    // ): ImageProd!

    // t.string('createOneImageProd', {
    //   type: "ImageProd",
    //   nullable: false,
    //   args: {
    //     file: arg({ type: 'Upload', nullable: false }),
    //     data: arg({ type: 'ImageProdCreateInput', nullable: false })
    //   },
    //   // @ts-ignore
    //   resolve: async (parent, args) => {
    //     const {
    //       createReadStream,
    //       filename,
    //       mimetype,
    //       encoding
    //     } = await args.file
    //     console.log('args.file', args.file)
    //     if (!filename) {
    //       throw Error('Invalid file Stream')
    //     } else if (filename) {
    //       console.log('filename', filename)
    //       if (mimetype.startsWith('image')) {
    //         const readStream = createReadStream(filename)
    //         readStream
    //           .pipe(
    //             fs.createWriteStream(
    //               path.join(__dirname, '../../uploads/', filename)
    //             )
    //           )
    //           .on('close', (res: any) => {
    //             console.log('close ', res)
    //           })
    //         return 'ok'
    //       } else {
    //         console.log('please select image', mimetype)
    //       }
    //     }
    //   }
    // })

    // https://stackoverflow.com/questions/55216860/graphql-error-when-resolving-promises-during-file-upload
    t.string('uploadFiles', {
      args: {
        files: arg({ type: 'Upload', nullable: false, list: true }),
        product_id: intArg({ required: false })
      },
      resolve: async (parent, args) => {
        return await Promise.all(
          args
            .files
            .map(
              async (file) => {
                const { createReadStream, filename } = await file
                if (!filename) {
                  throw Error('Invalid file Stream')
                } else if (filename) {
                  console.log('filename', filename)
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
                }
              }
            )
        )
          .then(() => 'ok')
          .catch((err) => 'bad')
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
