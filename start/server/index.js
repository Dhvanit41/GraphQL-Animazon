const { ApolloServer, gql } = require("apollo-server");
const {mainCards,animals} = require('./db')

const typeDefs = gql`
  type MainCard {
    title: String!
    image: String!
  }

  type Animal{
    id:ID!
    image:String!
    title:String!
    rating:Float
    price:String!
    description:[String!]!
    stock:Int!,
    onSale:Boolean,
    slug:String!
  }

  type Query {
    mainCards: [MainCard]
    animals:[Animal!]!,
    animal(slug:String!):Animal
  }
`;

const resolvers = {
  Query: {
    mainCards: () => mainCards,
    animals:() => animals,
    animal : (parent,args,ctx)=>{
      let animal = animals.find((animal)=>(
        animal.slug=== args.slug
      ))
      return animal
    }
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
