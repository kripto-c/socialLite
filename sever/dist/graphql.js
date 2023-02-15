"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `
  type Query {
    hello: String
  }
`;
exports.typeDefs = typeDefs;
const resolvers = {
    Query: {
        hello: () => 'Hello World!',
    },
};
exports.resolvers = resolvers;
//# sourceMappingURL=graphql.js.map