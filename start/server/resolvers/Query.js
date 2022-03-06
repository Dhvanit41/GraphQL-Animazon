const { mainCards, animals, categories } = require("../db");

const Query = {
  mainCards: () => mainCards,
  animals: () => animals,
  animal: (parent, args, ctx) => {
    return animals.find((animal) => animal.slug === args.slug);
  },
  categories: () => categories,
  category: (parent, args, ctx) => {
    return categories.find((category) => category.slug === args.slug);
  },
};

module.exports = Query;
