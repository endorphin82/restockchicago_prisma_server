import { objectType } from '@nexus/schema'

export const ImageProd = objectType({
  name: 'ImageProd',
  definition(t) {
    t.model.id()
    t.model.product()
    t.model.url()
    t.model.product_id()
    t.upload('uploadFile')
  }
})
