import { FC } from 'react';

interface Props {
  image: string;
  name: string;
  description: string;
}

export const Card: FC<Props> = (p: Props) => {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={p.image}></img>
        </div>
        <div className="card-content">
          <h3 className="title is-3">{p.name}</h3>
          <p>{p.description}</p>
        </div>
      </div>
    </>
  );
};
