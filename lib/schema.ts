import { Query } from './models/Query'

import { Product } from './models/Product'
import { Category } from './models/Category'
import { ImageCat } from './models/ImageCat'
import { ImageProd } from './models/ImageProd'
import { Mutation } from './models/Mutation'
import { Upload } from './models/Upload'
import { File } from './models/File'
import { makeSchema } from '@nexus/schema'
import { nexusPrismaPlugin } from 'nexus-prisma'
// import { addCrudResolvers } from '@ra-data-prisma/backend/'

export const schema = makeSchema({
  types: [Query, Mutation, Product, Category, ImageProd, ImageCat, Upload, File],
  plugins: [nexusPrismaPlugin({ experimentalCRUD: true })],
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
