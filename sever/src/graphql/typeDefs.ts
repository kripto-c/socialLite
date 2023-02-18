import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    hello: String,
    users:[User]
  }

  type User {
      _id:ID!,
      name:String,
      lastName:String,
      username:String,
      email:String,
      password:String,
      birthdate:String,
      profile_picture:String,
      verified:Boolean,
      connected:Boolean,
      publications:[Publications],
      message:[Message]
  },

  type Publications {
             _id:ID!
            id_user:User!    
            description: String
            image: String
            date:Date
            comments:[{text:String, author:User}]
  },

  type Message {
      id_1:User,
      id_2:User,
      message:[{username:String, message:String}]
  }
`;
