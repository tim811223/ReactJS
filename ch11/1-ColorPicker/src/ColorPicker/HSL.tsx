import "./ColorPicker.scss";
import { FC, useState } from "react";
import { H } from "./H";
import { S } from "./S";
import { L } from "./L";

export const HSL: FC = () => {
  const [initH,initS,initL] = [0,100,50];
  const [h, setH] = useState<number>(initH);
  const [s, setS] = useState<number>(initS);
  const [l, setL] = useState<number>(initL);

  return (
    <>
      <div>
        <div className="color-picker">
          <H initVal={initH} onSelect={setH} />
          <S initVal={initS} hue={h}  onSelect={setS} />
          <L initVal={initL} hue={h}  onSelect={setL} />
        </div>
      </div>
    </>
  );
};
