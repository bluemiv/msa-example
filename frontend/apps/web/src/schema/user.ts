import { gql } from '@apollo/client';

const FETCH_USER = gql`
  query FetchUser {
    user {
      username
    }
  }
`;

const FETCH_USERS = gql`
  query FetchUsers {
    users {
      username
    }
  }
`;

const userSchema = {
  FETCH_USER,
  FETCH_USERS,
};

export default userSchema;
