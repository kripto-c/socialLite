//############################################//
// import { ApolloServer } from "apollo-server-express";
import express from "express";
import { typeDefs } from "./graphql/typeDefs";
import { resolvers } from "./graphql/resolve";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { SERVER_PORT } from "./config";
import http from "http";
import cors from "cors";

export const startApolloServer = async () => {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use("/graphql", cors(), express.json(), expressMiddleware(server));

  httpServer.listen(SERVER_PORT, () =>
    console.log(`Server running on --> http://localhost:${SERVER_PORT}`)
  );
};

//############################################//
//############################################//

// import { ApolloServer } from "apollo-server-express";
// import { typeDefs } from "./graphql/typeDefs";
// import { resolvers } from "./graphql/resolve";

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// export async function startApolloServer(app: any) {
//   await server.start();
//   server.applyMiddleware({ app });
// }
