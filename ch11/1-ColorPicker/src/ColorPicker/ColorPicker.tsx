import "./ColorPicker.scss";
import { FC } from "react";
import _ from "lodash";
import { Palette } from "./Palette";
import { hsl } from "./util";

export const ColorPicker: FC = () => {
  return (
    <>
      <div>
        <div className="color-picker">
          <Palette colors={_.range(360).map((h) => hsl(h, 100, 50))} />
        </div>
      </div>
    </>
  );
};
