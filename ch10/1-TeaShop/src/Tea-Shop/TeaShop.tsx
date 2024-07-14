import "/public/TeaShop.scss";
import { Form } from "./Form";
import { OrderList } from "./OrderList";
import { Item } from "../models/Item";
import { ShoppingCart } from "../models/ShoppingCart";
import { Tea, TeaPrice } from "../models/enum/Tea";
import { Size } from "../models/enum/Size";
import { FC, useState } from "react";
import { v4 as uuid } from "uuid";
import { _item, _Order, _ShoppingCart } from "../FakeData/Data";
import { Receipt } from "./Receipt";
import { Order } from "../models/Order";

interface Props {
  isPlaced: boolean;
  // showOrder:(_isPlaced:boolean)=> void;
}

/**
 * 最外層Componment
 */
export const TeaShop: FC<Props> = (prop) => {
  /*************
   * Hook Area
   * ***********/

  /*************
   * State Area
   * ***********/
  const [ShoppingCarts, setShoppingCarts] =
    useState<ShoppingCart[]>(_ShoppingCart);
  const [order, setOrder] = useState<Order>({} as Order);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isPlaced, setisPlaced] = useState<boolean>(prop.isPlaced);

  /*************
   * Todo Area
   * ***********/
  const ItemPrice = (item: Item) => {
    const price = Object.entries(Tea)
      .filter(([_k, _v]) => isNaN(_k as any) && _v === item["tea"])
      .map(
        ([_k, _v]) =>
          parseInt(TeaPrice[_k as keyof typeof Tea].toString()) *
          parseInt(item["quantity"].toString()),
      )[0];
    return price;
  };
  const addShoppingCart = (newItem: ShoppingCart) => {
    setShoppingCarts([...ShoppingCarts, newItem]);
  };
  const deleteShoppingCart = (id: string) => {
    setShoppingCarts(ShoppingCarts.filter((i) => i.id !== id));
  };
  const addOrders = (_order: Order) => {
    setOrders([...orders, _order]);
    setOrder(_order);
  };
  const changeisPlaced = () => {
    setisPlaced(!isPlaced);
  };

  /*************
   * Handler Area
   * ***********/
  const handleCreateOrder = (ShoppingCart: ShoppingCart[]) => {
    const id = Math.floor(Math.random() * 9999).toString();
    let _TotalPrice = 0;
    ShoppingCart?.forEach((item) => {
      _TotalPrice += item.price;
    });

    addOrders({
      id: id,
      TotalPrice: _TotalPrice,
      itemShoppingCart: ShoppingCart,
    });

    changeisPlaced();
  };
  const handleAddShoppingCart = (item: Item) => {
    const totalPrice = ItemPrice(item);
    addShoppingCart({ id: uuid(), price: totalPrice, ...item });
  };
  const handleDeleteShoppingCart = (id: string) => {
    deleteShoppingCart(id);
  };

  return (
    <>
      <div className="TeaShop" hidden={isPlaced}>
        <Form item={_item} onSave={handleAddShoppingCart} />
        <hr />
        <OrderList
          ShoppingCart={ShoppingCarts}
          onDelete={handleDeleteShoppingCart}
          onSendOrder={handleCreateOrder}
        />
      </div>

      <div className="TeaShop" hidden={!isPlaced}>
        <Receipt order={order} />
      </div>
    </>
  );
};
