import { gql } from "@apollo/client";

export const getLogin = gql`
  mutation ($email: String $password: String) {
    login(email: $email password: $password) {
    token
    _id
    name
    lastName
    username
    email
    password
    birthdate
    profile_picture
    verified
    }
  }
`;
