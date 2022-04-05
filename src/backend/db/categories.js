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
    category: "SNEAKER_ADS",
  },
  {
    _id: uuid(),
    categoryName: "Sneaker origins",
    category: "SNEAKER_ORIGINS",
  },
  {
    _id: uuid(),
    categoryName: "Sneaker unboxing",
    category: "SNEAKER_UNBOXING",
  },
  {
    _id: uuid(),
    categoryName: "Sneaker shopping",
    category: "SNEAKER_SHOPPING",
  },
];
