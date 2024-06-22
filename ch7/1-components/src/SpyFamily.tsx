import { FC } from 'react';
import { Card, Props as CardProps } from './Card';

export type Role = CardProps;

interface Props {
  roles: Role[];
}

//此Component為一個容器裝[Anya,Loid,Yor]
export const SpyFamily: FC<Props> = ({ roles }) => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="columns">
            {roles.map((r) => (
              <div className="column is-3">
                {/* <Card
                  image={r.image}
                  name={r.name}
                  description={r.description}
                /> */}
                {/* 簡化的寫法 */}
                <Card {...r} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
