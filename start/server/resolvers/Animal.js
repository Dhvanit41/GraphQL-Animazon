const Animal = {
  category: (parent, args, {categories}) => {
    return categories.find((category) => category.id == parent.category);
  },
};

module.exports = Animal;
