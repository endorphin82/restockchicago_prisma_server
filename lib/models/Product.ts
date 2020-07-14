import { arg, extendType, inputObjectType, intArg, interfaceType, objectType, mutationField } from '@nexus/schema'
import { Upload } from './Upload'
import { File } from './File'
import fs from 'fs'
import path from 'path'

export const Product = objectType({
  name: 'Product',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.categories()
    t.model.url()
    t.model.description()
    t.model.icon()
    t.model.price()
    // t.field('img', {
    //   list: true,
    //   type: 'Img',
    //   // @ts-ignore
    //   resolve: parent => JSON.parse(parent.img)
    //
    // })
    t.model.img()
    // t.field('files', { type: File, list: true })

    // t.upload('up', { list: true })
    // t.field('files', { type: Upload, list: true })
    // t.list.field('files', { type: Upload })
  }
})

// export const ProductAndUpload = extendType({
//   type: 'ProductCreateInput',
//   definition(t) {
//     t.string('up')
//   }
// })

// export const ProductAndUpload = extendType({
//   type: 'Product',
//   definition(t) {
//     t.field('Up', {
//       type: "File",
//       resolve: () => {
//         console.log('res')
//       }
//     })
//   }
// })

// export const ProductAndUpload = mutationField((t) => {
//   t.connectionField('UploadFiles', {
//     type: 'File',
//     list: true,
//     args: {
//       files: arg({ type: 'Upload', nullable: false, list: true }),
//       product_id: intArg({ required: false })
//     },
//     resolve: async (parent, args) => {
//       const { files } = await args
//       const resFiles = Promise.all(
//         files
//           .map(
//             async (file) => {
//               const { createReadStream, filename } = await file
//               if (!filename) {
//                 throw Error('Invalid file Stream')
//               } else if (filename) {
//                 const readStream = createReadStream(filename)
//                 const newName = `${args.product_id}_${filename}`
//                 readStream
//                   .pipe(fs.createWriteStream(path.join(__dirname, '../../uploads/', newName)))
//                   .on('close', () => {
//                     console.log('onClose')
//                   })
//                 return {
//                   uid: String(Date.now()),
//                   name: newName,
//                   status: 'done',
//                   url: `www.${newName}`
//                 }
//               }
//             }
//           )
//       )
//       // console.log('resFiles', resFiles)
//       console.log('------', resFiles)
//       return resFiles.then(res => {
//         console.log('res---', res)
//         return res
//       }).catch(err => {
//         console.log('err---', err)
//         return err
//       })
//     }
//   })
//   // t.upload('up', { list: true })
//   // t.field('files', { type: Upload, list: true })
//   // t.list.field('files', { type: Upload })
//
// })
