import { Query } from './models/Query'

import { Product } from './models/Product'
import { Category } from './models/Category'
import { ImageCat } from './models/ImageCat'
import { ImageProd } from './models/ImageProd'
import { Mutation } from './models/Mutation'

import { Upload } from './models/Upload'
import { addCrudResolvers } from '@ra-data-prisma/backend/'
import { makeSchema } from '@nexus/schema'
import { nexusPrismaPlugin } from 'nexus-prisma'

export const schema = makeSchema({
  types: [Query, Mutation,
    Product, addCrudResolvers("Product"),
    Category, addCrudResolvers("Category"),
    ImageProd, addCrudResolvers("ImageProd"),
    ImageCat, addCrudResolvers("ImageCat"),
    Upload
  ],
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
