import { FC, useState } from "react";

interface Props {
  colors: string[];
}

export const Palette: FC<Props> = ({ colors }) => {
  const [val, setVal] = useState<number>(0);

  return (
    <>
      <div className="palette">
        {colors.map((c, i) => (
          <div
            style={{ backgroundColor: c }}
            className="cell"
            key={c}
            onClick={() => setVal(i)}
            onMouseEnter={(e) => e.button & 1 && setVal(i)}
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
