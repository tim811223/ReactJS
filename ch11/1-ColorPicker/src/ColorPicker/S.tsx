import { FC } from "react";
import { Palette } from "./Palette";
import _ from "lodash";
import { hsl } from "./util";

interface Props {
  initVal:number;
  hue: number;
  onSelect: (v: number) => void;
}

export const S: FC<Props> = ({ initVal,hue,onSelect}) => {
  return (
    <>
      <Palette
        initVal={initVal}
        colors={_.range(360).map((s) => hsl(hue, s, 50))}
        onSelect={onSelect}
      />
    </>
  );
};
