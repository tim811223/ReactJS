import foto1 from '/1.png';

export const Anya = () => {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={foto1}></img>
        </div>
        <div className="card-content">
          <h3 className="title is-3">Anya</h3>
          <p>this is foto 1</p>
        </div>
      </div>
    </>
  );
};
