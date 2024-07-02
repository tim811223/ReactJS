import { FC } from "react";
import { Palette } from "./Palette";
import _ from "lodash";
import { hsl } from "./util";

interface Props {
  initVal: number;
  hue: number;
  onSelect: (v: number) => void;
}

export const L: FC<Props> = ({ initVal, hue, onSelect }) => {
  return (
    <>
      <Palette
        initVal={initVal}
        colors={_.range(100).map((l) => hsl(hue, 100, l))}
        onSelect={onSelect}
      />
    </>
  );
};
