import "./ColorPicker.scss";
import { FC, memo, useEffect, useState } from "react";
import { H } from "./H";
import { S } from "./S";
import { L } from "./L";

interface Props {
  onSelect: (h: number, s: number, l: number) => void;
}

export const HSL: FC<Props> = ({ onSelect }) => {
  const [initH, initS, initL] = [0, 100, 50];
  const [h, setH] = useState<number>(initH);
  const [s, setS] = useState<number>(initS);
  const [l, setL] = useState<number>(initL);

  /**
   * useEffect這個Hook表示
   * 監測[h, s, l]內的state,如果有修改就執行 onSelect(h, s, l);
   * 但有缺點會重複render
   */
  useEffect(() => {
    onSelect(h, s, l);
  }, [h, s, l]);

  const handleHSelect = (h: number) => {
    setH(h);
  };
  const handleSSelect = (s: number) => {
    setS(s);
  };
  const handleLSelect = (l: number) => {
    setL(l);
  };

  return (
    <>
      <div>
        <div className="color-picker">
          <H initVal={initH} onSelect={handleHSelect} />
          <S initVal={initS} hue={h} onSelect={handleSSelect} />
          <L initVal={initL} hue={h} onSelect={handleLSelect} />
        </div>
      </div>
    </>
  );
};

/**
 * memo 就是個component
 * 輸入輸出都是component,只有在prop更動時在parent component  render時一起re-render
 */
export const MemoHSL = memo(HSL);
