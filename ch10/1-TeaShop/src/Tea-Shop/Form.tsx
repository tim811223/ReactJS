/**
 * 表單
 */
export const Form = () => {
  return (
    <>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Tea</label>
        </div>
        <div className="field-body">
          <div className="field is-narrow">
            <div className="control">
              <div className="select is-fullwidth">
                <select>
                  <option>請選擇</option>
                  <option>紅茶</option>
                  <option>奶茶</option>
                </select>
              </div>
              <label className="checkbox">
                <input type="checkbox" />
                Milk Foam
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label">
          <label className="label">Size</label>
        </div>
        <div className="field-body">
          <div className="field is-narrow">
            <div className="control">
              <label className="radio">
                <input type="radio" name="Size" />L
              </label>
              <label className="radio">
                <input type="radio" name="Size" />M
              </label>
              <label className="radio">
                <input type="radio" name="Size" />S
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label">
          <label className="label">Sugar</label>
        </div>
        <div className="field-body">
          <div className="field is-narrow">
            <div className="control">
              <label className="radio">
                <input type="radio" name="Sugar" />0
              </label>
              <label className="radio">
                <input type="radio" name="Sugar" />1
              </label>
              <label className="radio">
                <input type="radio" name="Sugar" />2
              </label>
              <label className="radio">
                <input type="radio" name="Sugar" />3
              </label>
              <label className="radio">
                <input type="radio" name="Sugar" />4
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label">
          <label className="label">Ice</label>
        </div>
        <div className="field-body">
          <div className="field is-narrow">
            <div className="control">
              <label className="radio">
                <input type="radio" name="Ice" />0
              </label>
              <label className="radio">
                <input type="radio" name="Ice" />1
              </label>
              <label className="radio">
                <input type="radio" name="Ice" />2
              </label>
              <label className="radio">
                <input type="radio" name="Ice" />3
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label">
          <label className="label">No padding</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" />
                Boba
              </label>
              <label className="checkbox">
                <input type="checkbox" />
                Pearl
              </label>
              <label className="checkbox">
                <input type="checkbox" />
                Jelly
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label">
          <label className="label">Quantity</label>
        </div>
        <div className="field-body">
          <div className="field has-addons">
            <p className="control">
              <button className="button">
                <span>-</span>
              </button>
            </p>
            <p className="control">
              <button className="button">
                <span>0</span>
              </button>
            </p>
            <p className="control">
              <button className="button">
                <span>+</span>
              </button>
            </p>
          </div>
        </div>
      </div>

      <div className="field is-grouped is-grouped-right">
        <p className="control">
          <button className="button is-primary">Add</button>
        </p>
        <p className="control">
          <a className="button is-light">Cancel</a>
        </p>
      </div>
    </>
  );
};
