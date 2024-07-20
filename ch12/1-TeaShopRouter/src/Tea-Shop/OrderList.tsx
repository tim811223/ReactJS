import { FC, useEffect, useState } from "react";
import { ShoppingCart } from "../models/ShoppingCart";

interface Props {
  ShoppingCart?: ShoppingCart[];
  onDelete: (id: string) => void;
  onSendOrder: (ShoppingCart: ShoppingCart[]) => void;
}

/**
 * 購物車
 */
export const OrderList: FC<Props> = (prop) => {
  /*************
   * Hook Area
   * ***********/
  useEffect(() => {
    const _TotalPrice = updateTotalPrice();
    setTotalPrice(_TotalPrice);
  }, [prop]);

  /*************
   * State Area
   * ***********/
  const [totalPrice, setTotalPrice] = useState<number>(0);

  /*************
   * Todo Area
   * ***********/
  const updateTotalPrice = () => {
    let _TotalPrice = 0;
    prop.ShoppingCart?.forEach((item) => {
      _TotalPrice += item.price;
    });
    return _TotalPrice;
  };

  /*************
   * Handler Area
   * ***********/
  const handleDeleteItem: React.MouseEventHandler<HTMLButtonElement> = (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    prop.onDelete(e.currentTarget.value);
  };
  const handleCreateOrder: React.MouseEventHandler<HTMLButtonElement> = (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    prop.onSendOrder(prop.ShoppingCart ?? []);
  };

  return (
    <>
      <div className="table-container">
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th></th>
              <th>Tea</th>
              <th>Foam</th>
              <th>Size</th>
              <th>Sugar</th>
              <th>Ice</th>
              <th>Toppings</th>
              <th>Qty</th>
              <th>$</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(prop.ShoppingCart ?? "").map(([k, v]) => {
              return (
                <tr key={v["id"]}>
                  <td>
                    <button
                      className="button is-danger"
                      onClick={handleDeleteItem}
                      value={v["id"]}
                    >
                      刪除
                    </button>
                  </td>
                  <td>{v["tea"]}</td>
                  <td>{v["withFoam"] == true ? "V" : "X"}</td>
                  <td>{v["size"]}</td>
                  <td>{v["sugar"]}</td>
                  <td>{v["ice"]}</td>
                  <td>{v["toppings"]}</td>
                  <td>{v["quantity"]}</td>
                  <td>{v["price"]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="field is-grouped is-grouped-right">
        <div className="field-label is-medium">
          <label className="label">Total {totalPrice}</label>
          <button className="button is-primary" onClick={handleCreateOrder}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};
