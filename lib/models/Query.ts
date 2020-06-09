import { objectType, stringArg } from '@nexus/schema'

export const Query = objectType({
  name: 'Query',
  definition: function(t) {
    t.crud.category()
    t.crud.categories()
    t.crud.product()
    t.crud.products()

    t.field('productByName', {
      type: 'Product',
      args: {
        name: stringArg({ required: true })
      },
      resolve(_root, args, ctx) {
        return ctx.prisma.product
          .findOne({
            where: {
              name: args.name
            }
          })
          .then(result => {
            if (result === null) {
              throw new Error(`No blog with id of "${args.name}"`)
            }
            return result
          })
      }
    })

    t.field('categoryByName', {
      type: 'Category',
      args: {
        name: stringArg({ required: true })
      },
      resolve(_root, args, ctx) {
        return ctx.prisma.category
          .findOne({
            where: {
              name: args.name
            }
          })
          .then(result => {
            if (result === null) {
              throw new Error(`No blog with id of "${args.name}"`)
            }
            return result
          })
      }
    })
  }
})