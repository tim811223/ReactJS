import { ChangeEventHandler, FC, useState } from "react";
import { Priority } from "./TodoItem";

export const Editor: FC = () => {
  /*************
   * State Area
   * ***********/
  const [title, setTitle] = useState<string>("");
  const [priority, setPriority] = useState<Priority>(Priority.LOW);

  /*************
   * Handler Area
   * ***********/
  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };
  const handlePriorityChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPriority(parseInt(e.target.value));
  };

  return (
    <div className="box">
      <div className="field">
        <div className="conteol">
          <input
            type="text"
            className="input"
            placeholder="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
      </div>
      <div className="columns is-vcentered">
        <div className="column">
          <div className="field">
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  checked={priority === 0}
                  value={Priority.HIGH}
                  onChange={handlePriorityChange}
                />{" "}
                High{" "}
              </label>
              <label className="radio">
                <input
                  type="radio"
                  checked={priority === 1}
                  value={Priority.MEDIUM}
                  onChange={handlePriorityChange}
                />{" "}
                Medium{" "}
              </label>
              <label className="radio">
                <input
                  type="radio"
                  checked={priority === 2}
                  value={Priority.LOW}
                  onChange={handlePriorityChange}
                />{" "}
                Low{" "}
              </label>
            </div>
          </div>
        </div>
        <div className="column has-text-right">
          <div className="field">
            <div className="control">
              <div className="select">
                <select>
                  <option>assign to</option>
                  <option>alax</option>
                  <option>bob</option>
                  <option>chris</option>
                  <option>david</option>
                  <option>ed</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <textarea className="textarea" placeholder="content" />
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" /> Resolved{" "}
              </label>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field is-grouped is-grouped-right">
            <div className="control">
              <div className="buttons has-addons">
                <button className="button is-link"> Save </button>
                <button className="button is-link is-light"> Cancel </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
