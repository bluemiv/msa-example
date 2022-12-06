const authentication = (_, __, { dataSources }) => {
  return dataSources.authenticationApi.getAuthentication('taehongkim');
};

const authenticationResolver = {
  Query: { authentication },
};

export default authenticationResolver;
