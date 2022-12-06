const user = async (parent, __, { dataSources }) => {
  return await dataSources.userApi.getUser(1);
};

const users = async (_, __, { dataSources }) => {
  return await dataSources.userApi.getUsers();
};

const userResolver = {
  Query: {
    user,
    users,
  },
};

export default userResolver;
