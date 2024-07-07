import "/public/TeaShop.scss";
import { Form } from "./Form";
import { OrderList } from "./OrderList";
/**
 * 最外層Componment
 */
export const TeaShop = () => {
  return (
    <>
      <div className="TeaShop">
        <Form />
        <hr />
        <OrderList />
      </div>
    </>
  );
};
