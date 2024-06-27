import { FC } from "react";
import { Palette } from "./Palette";
import _ from "lodash";
import { hsl } from "./util";

interface Props {
  hue: number;
}

export const L: FC<Props> = ({ hue }) => {
  return (
    <>
      <Palette
        initVal={50}
        colors={_.range(100).map((l) => hsl(hue, 100, l))}
        onSelect={(v) => console.log(v)}
      />
    </>
  );
};
