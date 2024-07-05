import "./ColorPicker.scss";
import { FC, useState } from "react";
import { HSL } from "./HSL";
import "bulma/css/bulma.min.css";
import cv from "color-convert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

export const ColorPicker: FC = () => {
  const [rgb, setRgb] = useState<[number, number, number]>([255, 0, 0]);
  const rgbstr = `#${cv.rgb.hex(rgb)}`;
  const [r, g, b] = rgb;
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

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
            <HSL onSelect={(h, s, l) => setRgb(cv.hsl.rgb([h, s, l]))} />
          </div>
        </div>
      </div>
    </>
  );
};
