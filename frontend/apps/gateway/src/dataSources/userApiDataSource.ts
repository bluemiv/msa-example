import { RESTDataSource } from '@apollo/datasource-rest';
import { User } from '../model/user';

class UserApiDataSource extends RESTDataSource {
  override baseURL = 'http://localhost:3003/api/v1/';

  getUser = async (id: number): Promise<User> => {
    return this.get<User>(`user/${id}`);
  };

  getUsers = async (): Promise<[User]> => {
    return this.get<[User]>(`users`);
  };
}

export default UserApiDataSource;
