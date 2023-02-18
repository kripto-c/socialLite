import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './graphql/resolve';
import { typeDefs } from './graphql/typeDefs';

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
 export async function startApolloServer(app:any) {
    await server.start();
    server.applyMiddleware({ app });
  }
  