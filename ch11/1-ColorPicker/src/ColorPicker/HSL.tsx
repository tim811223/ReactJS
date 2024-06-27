import "./ColorPicker.scss";
import { FC, useState } from "react";
import { H } from "./H";
import { S } from "./S";
import { L } from "./L";

export const HSL: FC = () => {
  const [h, setH] = useState<number>(0);

  return (
    <>
      <div>
        <div className="color-picker">
          <H onSelect={setH} />
          <S hue={h} />
          <L hue={h} />
        </div>
      </div>
    </>
  );
};
