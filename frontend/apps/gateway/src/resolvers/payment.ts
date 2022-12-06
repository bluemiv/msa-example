const payment = async (_, __, { dataSources }) => {
  return await dataSources.paymentApi.getPayment(1);
};

const payments = async (_, __, { dataSources }) => {
  return await dataSources.paymentApi.getPayments();
};

const paymentResolver = {
  Query: {
    payment,
    payments,
  },
};

export default paymentResolver;
