import { objectType } from '@nexus/schema'

export const Product = objectType({
  name: 'Product',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.category()
    t.model.url()
    t.model.description()
    t.model.icon()
    t.model.category_id()
    t.model.price()
    t.model.images()
  }
})