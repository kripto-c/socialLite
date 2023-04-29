import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type Query {
    hello: String
    users: [User]
    user(_id: ID!): User
    publications: [Publications]
    validarToken(token: String): UserToken
    validateCode(id: String, code: String): UserToken
  }
  type Mutation {
    login(email: String, password: String): UserToken
    createUser(
      name: String
      lastName: String
      username: String
      email: String
      password: String
      birthdate: String
      profile_picture: String
      verified: Boolean
      connected: Boolean
    ): User

    createPublication(
      id_user: ID
      description: String
      image: String
    ): Publications

    deletPublication(_id: ID!): Publications

    createComents(id_public: ID!, text: String, author: String): Publications
    deleteComents(_id: ID!, id_public: ID!): Publications
  }

  type User {
    _id: ID
    name: String
    lastName: String
    username: String
    email: String
    password: String
    birthdate: String
    profile_picture: String
    verified: Boolean
    connected: Boolean
    publications: [Publications]
  }

  type UserToken {
    _id: ID
    name: String
    lastName: String
    username: String
    email: String
    password: String
    birthdate: String
    profile_picture: String
    verified: Boolean
    connected: Boolean
    publications: [Publications]
    token: String
  }

  type Publications {
    _id: ID
    id_user: User
    description: String
    image: String
    comments: [Comment]
  }

  type Comment {
    _id: ID
    text: String!
    author: User!
    createdAt: String
    updatedAt: String
  }
`
