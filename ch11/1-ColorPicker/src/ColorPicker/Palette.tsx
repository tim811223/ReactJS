import { FC } from "react";

interface Props {
  colors: string[];
}

export const Palette: FC<Props> = ({ colors }) => {
  return (
    <>
      <div className="palette">
        {colors.map((c) => (
          <div style={{ backgroundColor: c }} className="cell" key={c}></div>
        ))}
      </div>
    </>
  );
};
