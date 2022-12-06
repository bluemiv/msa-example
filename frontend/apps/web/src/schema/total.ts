import { gql } from '@apollo/client';

const FETCH_TOTAL = gql`
  query FetchTotal {
    total {
      authentication {
        token
      }
      user {
        username
      }
      payment {
        price
      }
    }
  }
`;

const totalSchema = {
  FETCH_TOTAL,
};

export default totalSchema;
