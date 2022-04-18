import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "All",
    category: "ALL",
  },
  {
    _id: uuid(),
    categoryName: "Sneaker ads",
  },
  {
    _id: uuid(),
    categoryName: "Sneaker origins",
  },
  {
    _id: uuid(),
    categoryName: "Sneaker unboxing",
  },
  {
    _id: uuid(),
    categoryName: "Sneaker shopping",
  },
];
