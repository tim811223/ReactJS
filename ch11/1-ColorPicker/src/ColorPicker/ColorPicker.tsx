import "./ColorPicker.scss";
import { FC } from "react";
import { HSL } from "./HSL";

export const ColorPicker: FC = () => {
  return (
    <>
      <div>
        <div className="color-picker">
          <HSL />
        </div>
      </div>
    </>
  );
};
