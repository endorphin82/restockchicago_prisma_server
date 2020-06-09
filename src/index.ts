import { schema } from '../lib/schema'
import { createContext } from '../prisma/context'
import { ApolloServer } from 'apollo-server'

new ApolloServer({ schema, context: createContext }).listen(
  { port: process.env.PORT },
  () =>
    console.log(
      `🚀 Server ready at: http://localhost:${process.env.PORT}\n⭐️ See sample queries: http://pris.ly/e/js/graphql-apollo-server#using-the-graphql-api`
    )
)