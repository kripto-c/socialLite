import { gql } from "@apollo/client";

export const login = gql`
    type Query {
        login($email: String $password: String){
            token
            
        }
    }
`;
