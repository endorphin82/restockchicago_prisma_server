import { objectType } from '@nexus/schema'

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
  }
})
