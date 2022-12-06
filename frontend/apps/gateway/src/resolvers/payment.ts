const payment = (_, __, { dataSources }) => {
  return dataSources.paymentApi.getPayment(1);
};

const payments = (_, __, { dataSources }) => {
  return dataSources.paymentApi.getPayments();
};

const paymentResolver = {
  Query: {
    payment,
    payments,
  },
};

export default paymentResolver;
