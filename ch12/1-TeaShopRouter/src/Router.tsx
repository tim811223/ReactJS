import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TeaShop } from "./Tea-Shop/TeaShop";
import { Receipt } from "./Tea-Shop/Receipt";

export const Router: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="order" element={<TeaShop />}></Route>
          <Route path="receipt" element={<Receipt />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

