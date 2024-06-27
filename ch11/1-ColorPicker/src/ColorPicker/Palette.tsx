import { FC, useState } from "react";

interface Props {
  initVal?: number;
  colors: string[];
  onSelect: (val: number) => void;
}

export const Palette: FC<Props> = ({ initVal, colors, onSelect }) => {
  const [val, setVal] = useState<number>(initVal ?? 0);

  return (
    <>
      <div className="palette">
        {colors.map((c, i) => (
          <div
            style={{ backgroundColor: c }}
            className="cell"
            key={c}
            onClick={() => {
              setVal(i);
              onSelect(i);
            }}
            onMouseEnter={(e) => {
              if (e.button & 1) {
                setVal(i);
                onSelect(i);
              }
            }}
          >
            <span className="val" hidden={i !== val}>
              {i}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};
