import { FC } from "react";

interface Props {
  colors: string[];
}

export const Palette: FC<Props> = ({ colors }) => {
  return (
    <>
      <div className="palette">
        {colors.map((c, i) => (
          <div style={{ backgroundColor: c }} className="cell" key={c}>
            <span className="val">{i}</span>
          </div>
        ))}
      </div>
    </>
  );
};
