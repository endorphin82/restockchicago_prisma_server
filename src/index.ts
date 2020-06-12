import { schema } from '../lib/schema'
import { createContext } from '../prisma/context'
import { ApolloServer } from 'apollo-server'

const myPlugin = {

  // Fires whenever a GraphQL request is received from a client.
  requestDidStart(requestContext) {
    console.log('Request started! Query:\n' +
      requestContext.request.query);

    return {

      // Fires whenever Apollo Server will parse a GraphQL
      // request to create its associated document AST.
      parsingDidStart(requestContext) {
        console.log('Parsing started!');
      }

      // Fires whenever Apollo Server will validate a
      // request's document AST against your GraphQL schema.


    }
  },
};
new ApolloServer({ schema, context: createContext,  plugins: [
  myPlugin
] }).listen(
  { port: process.env.PORT },
  () =>
    console.log(
      `🚀 Server ready at: http://localhost:${process.env.PORT}\n⭐️ See sample queries: http://pris.ly/e/js/graphql-apollo-server#using-the-graphql-api`
    )
)