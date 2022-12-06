const user = (_, __, { dataSources }) => {
  return dataSources.userApi.getUser(1);
};

const users = (_, __, { dataSources }) => {
  return dataSources.userApi.getUsers();
};

const userResolver = {
  Query: {
    user,
    users,
  },
};

export default userResolver;
