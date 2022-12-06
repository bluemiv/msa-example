import { gql } from '@apollo/client';

const FETCH_USER = gql`
  query FetchUser {
    user {
      id
      username
      password
      email
    }
  }
`;

const FETCH_USERS = gql`
  query FetchUsers {
    users {
      id
      username
      password
      email
    }
  }
`;

const userSchema = {
  FETCH_USER,
  FETCH_USERS,
};

export default userSchema;
