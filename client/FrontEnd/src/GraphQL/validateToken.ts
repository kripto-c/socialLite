import { gql } from "@apollo/client";

export const ValidateToken = gql`
  query ($token: String) {
    validarToken(token: $token) {
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
