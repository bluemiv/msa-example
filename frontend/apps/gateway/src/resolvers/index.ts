import userResolver from './user';
import paymentResolver from './payment';

const resolver = {
  Query: {
    ...userResolver.Query,
    ...paymentResolver.Query,
  },
};

export default resolver;
