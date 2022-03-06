const {  animals } = require("../db");

const Category = {
  animals: (parent, args, ctx) => {
    return animals.filter((animal) => animal.category == parent.id);
  },
};

module.exports = Category;
