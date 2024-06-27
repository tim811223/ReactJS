import "./ColorPicker.scss";
import { FC } from "react";
import { Palette } from "./Palette";
import { hsl } from "./util";

export const ColorPicker: FC = () => {
  return (
    <>
      <div>
        <div className="color-picker">
          <Palette
            colors={[...Array(360).keys()].map((h) => hsl(h, 100, 50))}
          />
        </div>
      </div>
    </>
  );
};
