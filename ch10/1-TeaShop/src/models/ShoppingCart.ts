import { Item } from "./Item";

export interface ShoppingCart extends Item {
  id: string;
  price: number;
}
