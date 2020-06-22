import { objectType, arg } from '@nexus/schema'
import { Upload } from './Upload'
import path from 'path'
import fs from 'fs'

const readFS = (stream: {
  on: (
    arg0: string,
    arg1: (data: any) => number,
  ) => { on: (arg0: string, arg1: () => void) => void }
}) => {
  let chunkList: any[] | Uint8Array[] = []
  return new Promise((resolve, reject) =>
    stream
      .on('data', (data) => chunkList.push(data))
      .on('end', () => resolve(Buffer.concat(chunkList))),
  )
}

export const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    // t.crud.createOneCategory()
    // t.crud.updateOneCategory()
    // t.crud.deleteOneCategory()
    //
    // t.crud.createOneProduct()
    // t.crud.updateOneProduct()
    // t.crud.deleteOneProduct()
    //

    // t.string("uploadFile", {
    //   args: {
    //     file: arg({ type: "Upload", nullable: false }),
    //   },  // @ts-ignore
    //   resolve: async (_: any, { file }, {  }: any) => {
    //     console.log("asdasa", file);
    //     throw new Error(file)
    //     // return "ok";
    //   },
    // });

    t.string('uploadFile', {
      args: {
        file: arg({ type: 'Upload', nullable: false })
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
          console.log('!!!!asda')
          throw Error('Invalid file Stream')
        }
          // const ext = filename.split('.').pop()
          // const buf = await readFS(createReadStream())
          // const fileParsed = parse(buf.toString())
          // const fileData = fileParsed.data

          // console.log(fileData)
          // return fileData

          // console.log('file', filename)
          // const { createReadStream, filename, mimetype, encoding } = await file
          // console.log('file', file)
        // if (!file) return false
        else if (filename) {
          console.log('filename', filename)
          const readStream = createReadStream(filename)
          readStream
            // .on('open', function() {
            //   // @ts-ignore
            //   readStream.pipe(res)
            // })
            .pipe(
              fs.createWriteStream(
                path.join(__dirname, '../../uploads/', filename)
              )
            )
            .on('close', (res: any) => {
              console.log('close ', res)
            })
          return true
        }
      }
    })

    // t.string('uploadFile', {
    //   args: {
    //     file: arg({ type: 'Upload', nullable: false })
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
    //       console.log('!!!!asda')
    //       throw Error('Invalid file Stream')
    //     }
    //       // const ext = filename.split('.').pop()
    //       // const buf = await readFS(createReadStream())
    //       // const fileParsed = parse(buf.toString())
    //       // const fileData = fileParsed.data
    //
    //       // console.log(fileData)
    //       // return fileData
    //
    //       // console.log('file', filename)
    //       // const { createReadStream, filename, mimetype, encoding } = await file
    //       // console.log('file', file)
    //     // if (!file) return false
    //     else if (filename) {
    //       console.log('filename', filename)
    //       const readStream = createReadStream(filename)
    //       readStream
    //         // .on('open', function() {
    //         //   // @ts-ignore
    //         //   readStream.pipe(res)
    //         // })
    //         .pipe(
    //           fs.createWriteStream(
    //             path.join(__dirname, 'uploads/', filename)
    //           )
    //         )
    //         .on('close', (res: any) => {
    //           console.log('close ', res)
    //         })
    //       return true
    //     }
    //   }
    // })
  }
})
