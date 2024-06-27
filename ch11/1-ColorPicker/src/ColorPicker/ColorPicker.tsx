import "./ColorPicker.scss";
import { FC } from "react";
import { H } from "./H";
import { S } from "./S";
import { L } from "./L";

export const ColorPicker: FC = () => {
  return (
    <>
      <div>
        <div className="color-picker">
          <H />
          <br />
          <br />
          <br />
          <S hue={200} />
          <br />
          <br />
          <br />
          <L hue={200} />
        </div>
      </div>
    </>
  );
};
