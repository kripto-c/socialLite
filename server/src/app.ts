import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolve';

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
 export async function startApolloServer(app:any) {
    await server.start();
    server.applyMiddleware({ app });
  }
  