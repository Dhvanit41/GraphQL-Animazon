const { ApolloServer } = require("apollo-server");
const { mainCards, animals, categories } = require("./db");
const typeDefs = require("./schema.js");
const Category = require("./resolvers/Category");
const Animal = require("./resolvers/Animal");
const Query = require("./resolvers/Query");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Animal,
    Category,
  },
  context: {
    animals,
    categories,
    mainCards,
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
