const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type MainCard {
    title: String!
    image: String!
  }

  type Query {
    mainCards: [MainCard]
  }
`;

const mainCards = [
  {
    title: "Subtle Art of not giving a fuck",
    image: "lion",
  },
  {
    title: "Looking for gift",
    image: "penguine",
  },
  {
    title: "Best Behaved",
    image: "cat",
  },
];

const resolvers = {
  Query: {
    mainCards: () => mainCards,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
