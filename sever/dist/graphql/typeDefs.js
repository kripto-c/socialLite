"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
  type Query {
    hello: String
    users:[User]
    user(_id:ID!):User
    publications:[Publications]
  }
type Mutation { 
  createUser(
    name:String,
    lastName:String,
    username:String,
    email:String,
    password:String,
    birthdate:String,
    profile_picture:String,
    verified:Boolean,
     connected:Boolean
    ):User

    createPublication(
      id_user:ID    
      description:String
      image:String
    ): Publications

    deletPublication(_id:ID!):Publications

    createComents(id_public:ID!, text:String, author:String):Publications
    deleteComents(_id:ID!, id_public:ID!):Publications
}


,
  type User {
      _id:ID,
      name:String,
      lastName:String,
      username:String,
      email:String,
      password:String,
      birthdate:String,
      profile_picture:String,
      verified:Boolean,
      connected:Boolean,
      publications:[Publications]
  }

  type Publications {
            _id:ID
            id_user:User    
            description:String
            image:String
            comments: [Comment]
  }
  
  type Comment {
  _id: ID,
  id_public:String!
  text: String!
  author: User!
  createdAt: String
  updatedAt: String
}
`;
//# sourceMappingURL=typeDefs.js.map