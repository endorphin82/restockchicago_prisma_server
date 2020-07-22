import { objectType } from '@nexus/schema'

export const Category = objectType({
  name: 'Category',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.parent()
    t.model.url()
    t.model.description()
    t.model.products()
    t.model.icon()
    t.model.img()
  }
})
