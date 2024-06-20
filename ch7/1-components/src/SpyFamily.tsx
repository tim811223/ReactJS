import { Anya } from './Anya';
import { Loid } from './Loid';
import { Yor } from './Yor';

//此Component為一個容器裝[Anya,Loid,Yor]
export const SpyFamily = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-3">
              <Anya />
            </div>
            <div className="column is-3">
              <Loid />
            </div>
            <div className="column is-3">
              <Yor />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
