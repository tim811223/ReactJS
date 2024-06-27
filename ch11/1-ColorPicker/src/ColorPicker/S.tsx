import { FC } from "react";
import { Palette } from "./Palette";
import _ from "lodash";
import { hsl } from "./util";

interface Props {
  hue: number;
}

export const S: FC<Props> = ({ hue }) => {
  return (
    <>
      <Palette
        initVal={100}
        colors={_.range(360).map((s) => hsl(hue, s, 50))}
        onSelect={(v) => console.log(v)}
      />
    </>
  );
};
