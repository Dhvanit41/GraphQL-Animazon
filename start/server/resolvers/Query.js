const Query = {
  mainCards: (parent, args, { mainCards }) => mainCards,
  animals: (parent, args, { animals }) => animals,
  animal: (parent, args, { animals }) => {
    return animals.find((animal) => animal.slug === args.slug);
  },
  categories: (parent, args, { categories }) => categories,
  category: (parent, args, { categories, mainCards }) => {
    return categories.find((category) => category.slug === args.slug);
  },
};

module.exports = Query;
