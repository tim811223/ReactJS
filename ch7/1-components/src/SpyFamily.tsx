import { Card } from './Card';

//此Component為一個容器裝[Anya,Loid,Yor]
export const SpyFamily = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-3">
              <Card image="/1.png" name="Anya" description="this is foto 1" />
            </div>
            <div className="column is-3">
              <Card image="/2.png" name="Loid" description="this is foto 2" />
            </div>
            <div className="column is-3">
              <Card image="/3.png" name="Yor" description="this is foto 3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
