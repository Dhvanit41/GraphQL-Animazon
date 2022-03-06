const {categories } = require("../db")

const Animal = {
  category: (parent, args, ctx) => {
    return categories.find((category) => category.id == parent.category);
  },
};

module.exports = Animal;
