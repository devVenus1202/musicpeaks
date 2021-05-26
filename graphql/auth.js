import gql from 'graphql-tag';

export const QuerySignIn = gql`
  query signIn($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      key
      account {
        uid
        name
      }
      issued_at
      issued_at_formatted
      expire_at
      expire_at_formatted
      roles
      error
    }
  }
`;

export const QueryGetToken = gql`
  query getJwtToken {
    uid
    token
    issued_at
    issued_at_formatted
    expire_at
    expire_at_formatted
    error
  }
`;
