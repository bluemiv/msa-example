import { gql } from '@apollo/client';

const FETCH_AUTH_TOKEN = gql`
  query FetchToken {
    authentication {
      username
      token
    }
  }
`;

const authenticationSchema = {
  FETCH_AUTH_TOKEN,
};

export default authenticationSchema;
