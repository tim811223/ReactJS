import { FC, useState } from "react";
import { Order } from "../models/Order";
import { useParams } from "react-router-dom";

interface Props {
  orderID?: string;
}

/**
 * 已送出的訂單
 */
export const Receipt: FC<Props> = (prop) => {
  const { orderNumber } = useParams(); //對應到<Route path="receipt/:orderNumber" >的orderNumber
  let params = new URL(document.location.toString()).searchParams; //取得網址參數 receipt?id=xxxx
  var array = [orderNumber, params.get("id"), prop.orderID]; //取得所有參數名稱
  let _orderid = array.find((x) => x != null && x != undefined);

  /*************
   * State Area
   * ***********/
  const [order, setOrder] = useState<Order>(
    JSON.parse(sessionStorage.getItem(_orderid ?? "") as any),
  );

  return (
    <>
      <div className="table-container">
        <br />
        <br />

        <h1 className="title">Order Number : {order?.id ?? ""}</h1>
        <h1 className="title">Price : {order?.TotalPrice ?? 0}</h1>
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
            {Object.entries(order?.itemShoppingCart ?? "").map(([k, v]) => {
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
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
