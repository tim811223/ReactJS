import "./ColorPicker.scss";
import { FC } from "react";
import { HSL } from "./HSL";
import "bulma/css/bulma.min.css";

export const ColorPicker: FC = () => {
  return (
    <>
      <div className="color-picker">
        <div className="columns is-mobile">
          <div className="column is-3">
            <div className="preview">COLOR PREVIEW</div>
          </div>
          <div className="column">
            <HSL />
          </div>
        </div>
      </div>
    </>
  );
};
