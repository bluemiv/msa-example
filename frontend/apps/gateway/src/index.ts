import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import resolvers from './resolvers';
import { UserApiDataSource, PaymentApiDataSource, AuthenticationApiDataSource } from './dataSources';

export interface TDataSources {
  dataSources: {
    authenticationApi: AuthenticationApiDataSource;
    userApi: UserApiDataSource;
    paymentApi: PaymentApiDataSource;
  };
}

const typeDefs = `
type Authentication {
  username: String
  token: String
}

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

type Total {
  user: User
  payment: Payment
  authentication: Authentication
}

type Query {
  authentication: Authentication
  user: User
  users: [User]
  payment: Payment
  payments: [Payment]
  total: Total
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
          authenticationApi: new AuthenticationApiDataSource({ cache }),
          userApi: new UserApiDataSource({ cache }),
          paymentApi: new PaymentApiDataSource({ cache }),
        },
      };
    },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

startServer();
