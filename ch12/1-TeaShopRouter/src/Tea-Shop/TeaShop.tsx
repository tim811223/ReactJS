import "/public/TeaShop.scss";
import { _item, _Order, _ShoppingCart } from "../FakeData/Data";
import { Outlet } from "react-router-dom";

/**
 * 最外層Componment
 */
export const TeaShop = () => {
  return (
    <>
      <div className="TeaShop">
        <Outlet />
      </div>
    </>
  );
};
