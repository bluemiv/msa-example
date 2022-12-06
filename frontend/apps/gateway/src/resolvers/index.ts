import userResolver from './user';
import paymentResolver from './payment';
import authenticationResolver from './authentication';
import totalResolver from './total';

const resolver = {
  Query: {
    ...userResolver.Query,
    ...paymentResolver.Query,
    ...authenticationResolver.Query,
    ...totalResolver.Query,
  },
  Total: {
    user: userResolver.Query.user,
    payment: paymentResolver.Query.payment,
    authentication: authenticationResolver.Query.authentication,
  },
  // Payment: paymentResolver.Query.payment,
  // Authentication: authenticationResolver.Query.authentication,
};

export default resolver;
