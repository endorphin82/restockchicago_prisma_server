import express from 'express'
import { schema } from '../lib/schema'
import { createContext } from '../prisma/context'
import * as p from 'path'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'

// const path = '/'
const path = '/'
const app = express()

// @ts-ignore
// global.__basedir = __dirname

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
}

const midLogger = (req: any, res: any, next: any) => {
  console.log('Hello from logger\n')
  next()
}

const plugLogger = {
  // Fires whenever a GraphQL request is received from a client.
  requestDidStart(requestContext: any) {
    // console.log('Request started! Query:\n' +
    //   requestContext.request.query)

    return {

      // Fires whenever Apollo Server will parse a GraphQL
      // request to create its associated document AST.
      parsingDidStart(requestContext: any) {
        console.log('Parsing started!')
      }

      // Fires whenever Apollo Server will validate a
      // request's document AST against your GraphQL schema.
    }
  }
}
const server = new ApolloServer({
  schema, context: createContext, plugins: [
    plugLogger
  ]
})

app.use('*', cors(corsOptions))

console.log("__dirname", p.join(__dirname, 'uploads/'))
app.use('/images', express.static(p.join(__dirname, '../uploads')))

app.use(path, midLogger)
// @ts-ignore
server.applyMiddleware({ app, path })

app.listen(
  { port: process.env.PORT },
  () =>
    console.log(
      `🚀 Server ready at: http://localhost:${process.env.PORT}${server.graphqlPath}\n⭐️ See sample queries: http://pris.ly/e/js/graphql-apollo-server#using-the-graphql-api`
    )
)

// new ApolloServer({
//   schema, context: createContext, plugins: [
//     myPlugin
//   ]
// }).listen(
//   { port: process.env.PORT },
//   () =>
//     console.log(
//       `🚀 Server ready at: http://localhost:${process.env.PORT}\n⭐️ See sample queries: http://pris.ly/e/js/graphql-apollo-server#using-the-graphql-api`
//     )
// )
