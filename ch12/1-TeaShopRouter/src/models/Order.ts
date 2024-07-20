import { ShoppingCart } from "./ShoppingCart";

export interface Order {
  id: string;
  itemShoppingCart: ShoppingCart[];
  TotalPrice: number;
}
