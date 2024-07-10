import { useState } from "react";
import { Tea } from "../models/enum/Tea";
import { Topping } from "../models/enum/Topping";
import { Size } from "../models/enum/Size";
import { sugar_max_Levels, ice_max_Levels } from "../models/Item";

/**
 * 表單
 */
export const Form = () => {
  /*************
   * State Area
   * ***********/
  const [tea, setTea] = useState<Tea>(Tea.BlackTea);
  const [size, setSize] = useState<Size>();
  const [sugar, setSugar] = useState<number>();
  const [ice, setIce] = useState<number>();
  const [MilkFoam, setMilkFoam] = useState<boolean>(false);
  const [toppings, setToppings] = useState<Topping[]>([]);
  const [quantity, setQuantity] = useState<number>(1);

  /*************
   * Handler Area
   * ***********/
  const handleTeaChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setTea(e.target.value as Tea);
  };
  const handleSizeChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSize(e.target.value as Size);
  };
  const handleSugarChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSugar(parseInt(e.target.value));
  };
  const handleIceChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setIce(parseInt(e.target.value));
  };
  const handleMilkFoamChange: React.MouseEventHandler<
    HTMLInputElement
  > = () => {
    setMilkFoam(!MilkFoam);
  };
  const handleToppingsChange: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    if (e.target.checked) {
      setToppings([...toppings, e.target.value as Topping]);
    } else {
      setToppings(toppings.filter((t) => t != (e.target.value as Topping)));
    }
  };
  const handleQuantityInc = () => {
    setQuantity(quantity + 1);
  };
  const handleQuantityDec = () => {
    setQuantity(quantity === 1 ? 1 : quantity - 1);
  };
  const handleQuantityChange: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setQuantity(parseInt(e.target.value));
  };
  const handleQuantityBlur: React.FocusEventHandler<HTMLInputElement> = () => {
    setQuantity(isNaN(quantity) || quantity < 1 ? 1 : quantity);
  };
  const handleSendForm: React.MouseEventHandler<HTMLButtonElement> = () => {};
  const handleCancel: React.MouseEventHandler<HTMLButtonElement> = () => {};

  return (
    <>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Tea</label>
        </div>
        <div className="field-body">
          <div className="field is-narrow">
            <div className="control">
              <div className="select is-fullwidth">
                <select onChange={handleTeaChange} value={tea as Tea}>
                  {Object.entries(Tea).map(([k, v]) => (
                    <option value={v} key={k}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={MilkFoam}
                  onClick={handleMilkFoamChange}
                />
                Milk Foam
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label">
          <label className="label">Size</label>
        </div>
        <div className="field-body">
          <div className="field is-narrow">
            <div className="control">
              {Object.entries(Size).map(([k, v]) => (
                <label className="radio">
                  <input
                    type="radio"
                    name="Size"
                    value={v}
                    key={k}
                    onChange={handleSizeChange}
                  />
                  {v}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label">
          <label className="label">Sugar</label>
        </div>
        <div className="field-body">
          <div className="field is-narrow">
            <div className="control">
              {Array.from({ length: sugar_max_Levels }, (key, value) => (
                <label className="radio">
                  <input
                    type="radio"
                    name="Sugar"
                    value={value}
                    onChange={handleSugarChange}
                  />
                  {value}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label">
          <label className="label">Ice</label>
        </div>
        <div className="field-body">
          <div className="field is-narrow">
            <div className="control">
              {Array.from({ length: ice_max_Levels }, (key, value) => (
                <label className="radio">
                  <input
                    type="radio"
                    name="Ice"
                    value={value}
                    onChange={handleIceChange}
                  />
                  {value}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label">
          <label className="label">No padding</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              {Object.entries(Topping).map(([k, v]) => (
                <label className="checkbox mr-2" key={k}>
                  <input
                    type="checkbox"
                    value={v}
                    checked={toppings.includes(v)}
                    onChange={handleToppingsChange}
                  />{" "}
                  {v}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label">
          <label className="label">Quantity</label>
        </div>
        <div className="field-body">
          <div className="field has-addons">
            <p className="control">
              <button className="button" onClick={handleQuantityDec}>
                <span>-</span>
              </button>
            </p>
            <p className="control">
              <input
                type="number"
                className="quantityInput"
                min={1}
                value={quantity}
                onChange={handleQuantityChange}
                onBlur={handleQuantityBlur}
              />
            </p>
            <p className="control">
              <button className="button" onClick={handleQuantityInc}>
                <span>+</span>
              </button>
            </p>
          </div>
        </div>
      </div>

      <div className="field is-grouped is-grouped-right">
        <p className="control">
          <button className="button is-primary" onClick={handleSendForm}>
            Add
          </button>
        </p>
        <p className="control">
          <button className="button is-light" onClick={handleCancel}>
            Cancel
          </button>
        </p>
      </div>
    </>
  );
};
