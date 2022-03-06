const { v4 } = require("uuid");
const { animals } = require("./Category");

const Mutation = {
  addAnimal: (
    parent,
    { image, title, rating, price, description, stock, onSale, slug, category },
    {animals}
  ) => {
    let newAnimal ={
       id:v4(), image, title, rating, price, description, stock, onSale, slug, category
    }
    animals.push(newAnimal)
    return newAnimal
  },

};
module.exports = Mutation;

// type Animal {
//     id: ID!
//     image: String!
//     title: String!
//     rating: Float
//     price: String!
//     description: [String!]!
//     stock: Int!
//     onSale: Boolean
//     slug: String!
//     category:Category
//   }
