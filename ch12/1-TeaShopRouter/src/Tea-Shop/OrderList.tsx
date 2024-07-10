/**
 * 購物車
 */
export const OrderList = () => {
  return (
    <>
      <div className="table-container">
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th></th>
              <th>Tea</th>
              <th>Foam</th>
              <th>Size</th>
              <th>Sugar</th>
              <th>Ice</th>
              <th>Toppings</th>
              <th>Qty</th>
              <th>$</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
      </div>
      <div className="field is-grouped is-grouped-right">
        <div className="field-label is-medium">
          <label className="label">Total 123</label>
          <button className="button is-primary">Add</button>
        </div>
      </div>
    </>
  );
};
