import { objectType, stringArg, intArg, arg } from '@nexus/schema'

export const Query = objectType({
  name: 'Query',
  definition: function(t) {
    t.crud.category()
    t.crud.categories()
    t.crud.product()
    t.crud.products()
    /*
    products(
      first: Int
    last: Int
    before: ProductWhereUniqueInput
    after: ProductWhereUniqueInput
  ): [Product!]!
    */
    // return ctx.prisma.queryRaw('SELECT AUTO_INCREMENT FROM information_schema.TABLES WHERE TABLE_SCHEMA = "restockchicago" AND TABLE_NAME = "Product";')

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
      // @ts-ignore
      resolve(_root, args, ctx) {
        // return ctx.prisma
        //   .category
        //   .findOne({ where: { id: Number(args.category_id) } })
        //   .products({ where: { name: { contains: String(args.name) } } })
        return (!args.category_id) ?
          ctx.prisma
            .product
            .findMany({
              where: {
                name: { contains: String(args.name) }
                // categories: Number(args.category_id)
              },
              orderBy: { id: 'desc' }
            }) :
          ctx.prisma
            .category
            .findOne({
              where: {
                id: Number(args.category_id)
              }
            }).products({
            where: {
              name: { contains: String(args.name) }
            },
            orderBy: { id: 'desc' }
          })
      }
    })

    t.field('productsByNameAndCategoryIds', {
      type: 'Product',
      list: true,
      args: {
        name: stringArg({ required: true }),
        category_ids: intArg({ required: false, list: true })
      },
      // @ts-ignore
      resolve: async (_root, args, ctx) => {
        const { category_ids, name } = args
        if (category_ids?.length == 0 || !category_ids) {
          const prods = await ctx.prisma
            .product
            .findMany({
              where: {
                name: { contains: String(name) }
                // categories: Number(args.category_id)
              },
              orderBy: { id: 'desc' }
            })
          return prods
        } else {
          let arr = await Promise.all(
            category_ids
              .map(async cat_id => {
                const prod = await ctx.prisma
                  .category
                  .findOne({
                    where: {
                      id: Number(cat_id)
                    }
                  }).products({
                    where: {
                      name: { contains: String(name) }
                    },
                    orderBy: { id: 'desc' }
                  })
                return prod
              })
          )
          const prods = arr.reduce(function(a: any, b: any) {
            return a.concat(b)
          })
          return prods
        }
      }
    })

    t.field('productsByCategoryId', {
      type: 'Product',
      list: true,
      args: {
        category_id: intArg({ required: true })
      },
      // @ts-ignore
      resolve(_root, args, ctx) {
        return ctx.prisma
          .category
          .findOne({ where: { id: Number(args.category_id) } })
          .products()
      }
    })
  }
})
