import { Size } from "../models/enum/Size";
import { Tea } from "../models/enum/Tea";
import { Topping } from "../models/enum/Topping";
import { Order } from "../models/Order";
import { ShoppingCart } from "../models/ShoppingCart";
import { v4 as uuid } from "uuid";

export const _item = {
  tea: Tea.GreenTea,
  withFoam: true,
  size: Size.Small,
  sugar: 0,
  ice: 1,
  toppings: [],
  quantity: 2,
};

export const _ShoppingCart: ShoppingCart[] = [
  {
    id: uuid(),
    tea: Tea.BlackTea,
    withFoam: true,
    size: Size.Big,
    sugar: 50,
    ice: 50,
    toppings: [Topping.BOBA, Topping.JELLY],
    quantity: 1,
    price: 10,
  },
  {
    id: uuid(),
    tea: Tea.MilkTea,
    withFoam: false,
    size: Size.Mid,
    sugar: 25,
    ice: 75,
    toppings: [Topping.BOBA],
    quantity: 3,
    price: 20,
  },
];

export const _Order: Order = {
  id: "1234", //Math.floor(Math.random() * 9999).toString(),
  itemShoppingCart: [
    {
      id: uuid(),
      tea: Tea.BlackTea,
      withFoam: true,
      size: Size.Big,
      sugar: 50,
      ice: 50,
      toppings: [Topping.BOBA, Topping.JELLY],
      quantity: 1,
      price: 10,
    },
    {
      id: uuid(),
      tea: Tea.MilkTea,
      withFoam: false,
      size: Size.Mid,
      sugar: 25,
      ice: 75,
      toppings: [Topping.BOBA],
      quantity: 3,
      price: 20,
    },
  ],
  TotalPrice: 50,
};
