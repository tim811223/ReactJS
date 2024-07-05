import "./ColorPicker.scss";
import { FC, useCallback, useState } from "react";
import { HSL, MemoHSL } from "./HSL";
import "bulma/css/bulma.min.css";
import cv from "color-convert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

export const ColorPicker: FC = () => {
  const [rgb, setRgb] = useState<[number, number, number]>([255, 0, 0]);
  const rgbstr = `#${cv.rgb.hex(rgb)}`;
  const [r, g, b] = rgb;
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

  /**
   * useCallback( (assign的function) , [監控參數])
   * useCallback( (assign的function) , [] )
   * 表示單 監控參數 變化時才會重新 assign function 給這個變數
   * 當 監控參數 給空白時就表示只有在一開始時才會assign,
   * 之後不管如何都不會被重新assign這樣下面的memo不管如何都會是同一個handler
   */
  const handleHSLSelect = useCallback(
    (h: number, s: number, l: number) => setRgb(cv.hsl.rgb([h, s, l])),
    [],
  );

  return (
    <>
      <div className="color-picker">
        <div className="columns is-mobile">
          <div className="column is-3">
            <div className="preview" style={{ backgroundColor: rgbstr }}>
              <p style={{ color: luminance < 128 ? "white" : "black" }}>
                {rgbstr}
              </p>
              <FontAwesomeIcon icon={faCopy} />
            </div>
          </div>
          <div className="column">
            {/* 
                  此處改為memo表示Componment
                  onSelect={(h, s, l) => setRgb(cv.hsl.rgb([h, s, l]))} 會在每次reder被重新定義,導致多重render
            */}
            {/* <HSL onSelect={(h, s, l) => setRgb(cv.hsl.rgb([h, s, l]))} /> */}
            <MemoHSL onSelect={handleHSLSelect} />
          </div>
        </div>
      </div>
    </>
  );
};
