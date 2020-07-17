import { objectType, arg, intArg } from '@nexus/schema'
import { Upload } from './Upload'

import path from 'path'
import fs from 'fs'
import { deserialize } from 'v8'
import { deleteImagesByFilenames, writeImages } from '../utils'

export const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.crud.createOneCategory()
    t.crud.updateOneCategory()
    t.crud.deleteOneCategory()

    t.crud.createOneProduct({ alias: '_createOneProduct' })
    t.crud.updateOneProduct({ alias: '_updateOneProduct' })
    t.crud.deleteOneProduct({ alias: '_deleteOneProduct' })

    t.field('updateOneProduct', {
      type: 'Product',
      args: {
        data: arg({ type: 'ProductUpdateInput', required: true }),
        where: arg({ type: 'ProductWhereUniqueInput', required: true }),
        files: arg({ type: 'Upload', list: true, nullable: true }),
        payloadEditProduct: arg({ type: 'String', nullable: true })
      },
      // @ts-ignores
      resolve: async (parent, args, ctx) => {
        const { where, data, files, payloadEditProduct } = await args
        const unsrlzPayload = JSON.parse(payloadEditProduct ? payloadEditProduct : '{}')
        console.log('unsrlzPayload', unsrlzPayload)
        const unsrlzImgs = unsrlzPayload?.img || []
        const unsrlzDelImgs = unsrlzPayload?.del || []
        console.log('unsrlzDelImgs', unsrlzDelImgs)
        console.log('unsrlzImgs', unsrlzImgs)
        const imgs = await writeImages(files, unsrlzImgs.length)
        console.log('imgs+++', imgs)
        await deleteImagesByFilenames(unsrlzDelImgs)
        const allImages = [...unsrlzImgs, ...imgs]
        // @ts-ignore
        console.log('allImages', allImages)
        const dataWitchImg = {
          ...data,
          // @ts-ignore
          ...((allImages.length == 0) ? {} : { img: JSON.stringify(allImages) })
        }
        const product = await ctx.prisma.product.update({
          // @ts-ignore
          where, data: { ...dataWitchImg }
        })
        return product
      }
    })

    t.field('createOneProduct', {
      type: 'Product',
      args: {
        data: arg({ type: 'ProductCreateInput', required: true }),
        files: arg({ type: 'Upload', list: true, nullable: true })
      },
      // @ts-ignores
      resolve: async (parent, args, ctx) => {
        const { data, files } = args
        const imgs = await writeImages(files)

        console.log('imgs', imgs)
        const dataWitchImg = {
          ...data,
          // @ts-ignore
          ...((imgs.length == 0) ? {} : { img: JSON.stringify(imgs) })
        }
        // @ts-ignore
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
            await deleteImagesByFilenames(imgsFileNames)
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
          await deleteImagesByFilenames(imgsFileNames)
        } else
          console.log('imgsFileNames---')
        return prod
      }
    })
  }
})
