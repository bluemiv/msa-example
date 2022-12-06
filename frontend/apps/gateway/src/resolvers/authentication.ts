const authentication = async (_, __, { dataSources }) => {
  return await dataSources.authenticationApi.getAuthentication('taehongkim');
};

const authenticationResolver = {
  Query: { authentication },
};

export default authenticationResolver;
