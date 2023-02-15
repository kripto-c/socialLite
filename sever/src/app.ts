import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql';

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
 export async function startApolloServer(app:any) {
    await server.start();
    server.applyMiddleware({ app });
  }
  