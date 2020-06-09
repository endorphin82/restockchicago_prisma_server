import { Query } from './models/Query'
import { makeSchema } from '@nexus/schema'
import { nexusPrismaPlugin } from 'nexus-prisma'
import { Product } from './models/Product'
import { Category } from './models/Category'
import { ImageCat } from './models/ImageCat'
import { ImageProd } from './models/ImageProd'

export const schema = makeSchema({
  types: [Query, Product, Category, ImageProd, ImageCat],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts'
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma'
      },
      {
        source: require.resolve('../prisma/context'),
        alias: 'Context'
      }
    ]
  }
})