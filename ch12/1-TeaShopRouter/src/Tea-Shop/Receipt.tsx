import { FC } from "react";
import { Order } from "../models/Order";

interface Props {
  order?: Order;
}

/**
 * 已送出的訂單
 */
export const Receipt: FC<Props> = (prop) => {
  return (
    <>
      <div className="table-container">
        <br />
        <br />

        <h1 className="title">Order Number : {prop.order?.id}</h1>
        <h1 className="title">Price : {prop.order?.TotalPrice}</h1>
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
            {Object.entries(prop.order?.itemShoppingCart ?? "").map(
              ([k, v]) => {
                return (
                  <tr key={v["id"]}>
                    <td></td>
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
              },
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
