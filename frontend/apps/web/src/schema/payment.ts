import { gql } from '@apollo/client';

const FETCH_PAYMENT = gql`
  query FetchPayment {
    payment {
      id
      type
      price
    }
  }
`;

const FETCH_PAYMENTS = gql`
  query FetchUsers {
    payments {
      id
      type
      price
    }
  }
`;

const paymentSchema = {
  FETCH_PAYMENT,
  FETCH_PAYMENTS,
};

export default paymentSchema;
