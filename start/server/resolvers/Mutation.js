const { v4 } = require("uuid");
const { animals } = require("./Category");
const { animal } = require("./Query");

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
  removeAnimal:(parent,{id},{animals})=>{
    let index = animals.findIndex((animal)=>animal.id == id);
    animals.splice(index,1)
    return index>-1?true:false
  }

};
module.exports = Mutation;
