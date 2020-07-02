import { asNexusMethod, scalarType } from '@nexus/schema'
import { GraphQLUpload } from 'graphql-upload'

// export const Upload = GraphQLUpload;
// export const Upload = scalarType({
//   name: "Upload",
//   serialize() { /* Todo */ },
//   parseValue() { /* Todo */ },
//   parseLiteral() { /* Todo */ }
// });
export const Upload = asNexusMethod(GraphQLUpload, 'upload')
// export const Upload = scalarType({
//   name: GraphQLUpload.name,
//   asNexusMethod: 'Upload', // We set this to be used as a method later as `t.upload()` if needed
//   // description: GraphQLUpload.description,
//   serialize: GraphQLUpload.serialize,
//   parseValue: GraphQLUpload.parseValue,
//   parseLiteral: GraphQLUpload.parseLiteral,
// })
