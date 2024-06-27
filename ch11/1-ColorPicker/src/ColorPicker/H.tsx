import { FC } from "react";
import { Palette } from "./Palette";
import _ from "lodash";
import { hsl } from "./util";

export const H: FC = () => {
  return (
    <>
      <Palette colors={_.range(360).map((h) => hsl(h, 100, 50))} />
    </>
  );
};
