import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import resolvers from './resolvers';
import UserApiDataSource from './dataSources/userApiDataSource';
import PaymentApiDataSource from './dataSources/paymentApiDataSource';

export interface TDataSources {
  dataSources: {
    userApi: UserApiDataSource;
    paymentApi: PaymentApiDataSource;
  };
}

const typeDefs = `
type User {
  id: ID
  username: String
  password: String
  email: String
}

type Payment {
  id: ID
  price: String
  type: String
}

type Query {
  user: User
  users: [User]
  payment: Payment
  payments: [Payment]
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
          userApi: new UserApiDataSource({ cache }),
          paymentApi: new PaymentApiDataSource({ cache }),
        },
      };
    },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

startServer();
