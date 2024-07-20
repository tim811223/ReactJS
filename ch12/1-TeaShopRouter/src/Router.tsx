import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { TeaShop } from "./Tea-Shop/TeaShop";
import { TeaShop } from "./Tea-Shop/TeaShop";
import { Receipt } from "./Tea-Shop/Receipt";
import { _Order } from "./FakeData/Data";
import { Order } from "./Tea-Shop/Order";

export const Router: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TeaShop />}>
            <Route path="order" element={<Order isPlaced={false} />}></Route>
            <Route path="receipt" element={<Receipt order={_Order} />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
