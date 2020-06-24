import { objectType, stringArg, intArg } from '@nexus/schema'

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
          .then((result: any) => {
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
          .then((result: any) => {
            if (result === null) {
              throw new Error(`No blog with id of "${args.name}"`)
            }
            return result
          })
      }
    })

    t.field('productsByNameAndCategoryId', {
      type: 'Product',
      list: true,
      args: {
        name: stringArg({ required: true }),
        category_id: intArg({ required: false })
      },
      resolve(_root, args, ctx) {
        // return ctx.prisma
        //   .category
        //   .findOne({ where: { id: Number(args.category_id) } })
        //   .products({ where: { name: { contains: String(args.name) } } })

        return ctx.prisma
          .product
          .findMany({
            where: {
              name: { contains: String(args.name) }
              // categories: Number(args.category_id)
            },
            // select: {
            //
            // }
            orderBy: { id: 'desc' }
          })
      }
    })

    t.field('productsByCategoryId', {
      type: 'Product',
      list: true,
      args: {
        category_id: intArg({ required: true })
      },
      resolve(_root, args, ctx) {
        return ctx.prisma
          .category
          .findOne({ where: { id: Number(args.category_id) } })
          .products()
      }
    })
  }
})
