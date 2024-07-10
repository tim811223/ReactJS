import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TeaShop } from "./Tea-Shop/TeaShop";

export const Router: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="order" element={<TeaShop />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
