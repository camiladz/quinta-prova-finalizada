import express from "express";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import cors from "cors";
import data from "./mockData";

const typeDefs = `
  type Query {
    hello: String!
    orderForm(input: OrderFormInput!): OrderForm!
    extendedWarranty: ExtendedWarranty!
  }

  type ExtendedWarranty {
    methods: [ExtendedWarrantyMethod!]!
  }

  type ExtendedWarrantyMethod {
    months: String!
    value: String!
  }

  input OrderFormInput{
    orderFormId: String!
  }

  type OrderForm{
    id: String!
    items: [Item]!
  }

  type Item {
    id: String!
    image: String!
    name: String!
    listPrice: String!
    price: String!
    shipping: Shipping!
  }
  
  type Shipping {
    delivery: Delivery
    pickup: Boolean!
  }

  type Delivery {
    days: String!
    value: String!
  }

  type Delivery {
    days: String!
    value: String!
  }

`;

const resolvers = {
  Query: {
    orderForm: (_: any, args: any) => {
      const { input } = args;

      if (input.orderFormId !== "c7eb7303-c53f-417d-8d51-cce67e5959e1") {
        throw new Error("invalid_order_form_id");
      }

      return data.orderForm;
    },
    extendedWarranty: (_: any, args: any) => {
      return data.extendedWarranty;
    }
  }
};

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs
});

const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(process.env.PORT || 80, () => {
  console.log("app running at http://localhost:80");
});
