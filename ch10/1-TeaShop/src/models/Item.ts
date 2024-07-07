import { Size } from "./enum/Size";
import { Tea } from "./enum/Tea";
import { Topping } from "./enum/Topping";

export const sugar_max_Levels = 5;
export const ice_max_Levels = 4;

export interface Item {
  tea: Tea;
  withFoam: boolean;
  size: Size;
  sugar: number;
  ice: number;
  toppings: Topping[];
  quantity: number;
}
