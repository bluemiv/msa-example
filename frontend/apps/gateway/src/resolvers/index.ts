import userResolver from './user';

const resolver = {
  Query: {
    ...userResolver.Query,
  },
};

export default resolver;
