import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import dataSources, { TDataSources } from './dataSources';
import resolvers from './resolvers';
import UserApiDataSource from './dataSources/userApiDataSource';

const typeDefs = `
type User {
  id: ID
  username: String
  password: String
  email: String
}

type Query {
  user: User
  users: [User]
}
`;

const startServer = async () => {
  const server = new ApolloServer<TDataSources>({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async () => {
      const { cache } = server;
      return {
        dataSources: {
          userApi: new dataSources.UserApiDataSource({ cache }),
        },
      };
    },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

startServer();
