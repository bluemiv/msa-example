import userResolver from './user';
import paymentResolver from './payment';
import authenticationResolver from './authentication';

const resolver = {
  Query: {
    ...userResolver.Query,
    ...paymentResolver.Query,
    ...authenticationResolver.Query,
  },
};

export default resolver;
