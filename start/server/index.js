const { ApolloServer } = require("apollo-server");
const { mainCards, animals, categories } = require("./db");
const typeDefs = require("./schema.js");
const Category = require("./resolvers/Category");
const Animal = require("./resolvers/Animal");
const Query = require("./resolvers/Query");

// const resolvers = {
//   Query: {
//     mainCards: () => mainCards,
//     animals: () => animals,
//     animal: (parent, args, ctx) => {
//       return animals.find((animal) => animal.slug === args.slug);
//     },
//     categories: () => categories,
//     category: (parent, args, ctx) => {
//       return categories.find((category) => category.slug === args.slug);
//     },
//   },
//   Category: {
//     animals: (parent, args, ctx) => {
//       return animals.filter((animal) => animal.category == parent.id);
//     },
//   },
//   Animal: {
//     category: (parent, args, ctx) => {
//       return categories.find((category) => category.id == parent.category);
//     },
//   },
// };

const server = new ApolloServer({ typeDefs, resolvers:{
  Query,
  Animal,
  Category
} });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
