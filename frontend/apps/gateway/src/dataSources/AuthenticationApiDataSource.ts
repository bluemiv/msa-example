import { RESTDataSource } from '@apollo/datasource-rest';
import { Authentication } from '../model';

class AuthenticationApiDataSource extends RESTDataSource {
  override baseURL = 'http://localhost:3001/api/v1/';

  getAuthentication = async (username: string): Promise<Authentication> => {
    return this.get<Authentication>(`authentication`, { params: { username } });
  };
}

export default AuthenticationApiDataSource;
