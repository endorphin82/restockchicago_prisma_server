import { objectType } from '@nexus/schema'

export const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.crud.createOneCategory()
    t.crud.updateOneCategory()
    t.crud.deleteOneCategory()

    t.crud.createOneProduct()
    t.crud.updateOneProduct()
    t.crud.deleteOneProduct()
  }
})