import "./ColorPicker.scss";
import { FC } from "react";
import { H } from "./H";
import { S } from "./S";
import { L } from "./L";

export const HSL: FC = () => {
  return (
    <>
      <div>
        <div className="color-picker">
          <H />
          <S hue={200} />
          <L hue={200} />
        </div>
      </div>
    </>
  );
};
