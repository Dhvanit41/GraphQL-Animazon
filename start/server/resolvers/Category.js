const Category = {
  animals: (parent, args, { animals }) => {
    return animals.filter((animal) => animal.category == parent.id);
  },
};

module.exports = Category;
