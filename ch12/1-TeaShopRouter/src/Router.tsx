import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { TeaShop } from "./Tea-Shop/TeaShop";
import { TeaShop } from "./Tea-Shop/TeaShop";
import { Receipt } from "./Tea-Shop/Receipt";
import { _Order } from "./FakeData/Data";
import { Order } from "./Tea-Shop/Order";
import { Navbar } from "./Navbar";

export const Router: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="Tea-shop" element={<TeaShop />}>
              <Route path="order" element={<Order isPlaced={false} />}></Route>
              <Route path="receipt" element={<Receipt orderID={""} />}></Route>
              <Route
                path="receipt/:orderNumber"
                element={<Receipt orderID={""} />}
              ></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
