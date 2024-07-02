import { FC } from "react";
import { Palette } from "./Palette";
import _ from "lodash";
import { hsl } from "./util";

interface Props {
  initVal: number;
  onSelect: (v: number) => void;
}

export const H: FC<Props> = ({ initVal, onSelect }) => {
  return (
    <>
      <Palette
        initVal={initVal}
        colors={_.range(360).map((h) => hsl(h, 100, 50))}
        onSelect={onSelect}
      />
    </>
  );
};
