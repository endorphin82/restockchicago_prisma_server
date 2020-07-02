import { arg, extendType, inputObjectType, intArg, interfaceType, objectType, mutationField } from '@nexus/schema'
import { Upload } from './Upload'
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
    t.model.images()
    // t.upload('up', { list: true })
    // t.field('files', { type: Upload, list: true })
    // t.list.field('files', { type: Upload })
  }
})

export const ProductAndUpload = mutationField((t) => {
  t.connectionField('UploadFiles', {
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
  // t.upload('up', { list: true })
  // t.field('files', { type: Upload, list: true })
  // t.list.field('files', { type: Upload })

})
