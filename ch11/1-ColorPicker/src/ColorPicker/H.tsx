import { FC, useMemo } from "react";
import { Palette } from "./Palette";
import _ from "lodash";
import { hsl } from "./util";

interface Props {
  initVal: number;
  onSelect: (v: number) => void;
}

export const H: FC<Props> = ({ initVal, onSelect }) => {
  /**
   * 如果 dependencies 没有发生变化，React 将直接返回相同值
   */
  const colors = useMemo(() => _.range(360).map((h) => hsl(h, 100, 50)), []);

  return (
    <>
      <Palette initVal={initVal} colors={colors} onSelect={onSelect} />
    </>
  );
};
