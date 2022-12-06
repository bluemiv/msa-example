import UserApiDataSource from './userApiDataSource';

export interface TDataSources {
  dataSources: {
    userApi: UserApiDataSource;
  };
}

const dataSources = {
  UserApiDataSource,
};

export default dataSources;
