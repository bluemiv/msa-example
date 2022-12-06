import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `
type User {
  username: String
}

type Query {
  user: User
  users: [User]
}
`;

const users = [
  {
    username: 'taehongkim',
  },
  {
    username: 'bluemiv',
  },
];

const resolvers = {
  Query: {
    user: () => users[0],
    users: () => users,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

startServer();
