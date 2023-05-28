import { gql } from "@apollo/client";

export const newUser = gql`
  mutation (
    $name: String
    $lastName: String
    $username: String
    $email: String
    $password: String
    $birthdate: String
  ) {
    createUser(
      name: $name
      lastName: $lastName
      username: $username
      email: $email
      password: $password
      birthdate: $birthdate
    ) {
      _id
      name
      lastName
      username
      email
    }
  }
`;
