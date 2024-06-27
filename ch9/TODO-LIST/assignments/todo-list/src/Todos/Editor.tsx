import { ChangeEventHandler, FC, useState } from "react";
import { Priority } from "./TodoItem";
import teamMembers from "./team-members.json";

export interface TodoItemModel {
  title: string;
  content: string;
  priority: number;
  resolved: boolean;
  assignee?: string;
}

interface Props {
  todo?: TodoItemModel;
  onSave: (todo: TodoItemModel) => void;
  onCancel: () => void;
}

export const Editor: FC<Props> = (props) => {
  /*************
   * State Area
   * ***********/
  const [title, setTitle] = useState<string>(props.todo?.title ?? "");
  const [priority, setPriority] = useState<Priority>(
    props.todo?.priority ?? Priority.LOW,
  );
  const [assignee, setAssignee] = useState<string>(props.todo?.assignee ?? "");
  const [content, setContent] = useState<string>(props.todo?.content ?? "");
  const [resolved, setResolved] = useState<boolean>(
    props.todo?.resolved ?? false,
  );

  /*************
   * Handler Area
   * ***********/
  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };
  const handlePriorityChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPriority(parseInt(e.target.value));
  };
  const handleAssigneeChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setAssignee(e.target.value);
  };
  const handleContentChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value);
  };
  const handleResolvedChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setResolved(!resolved);
  };
  const handleSaveClick: React.MouseEventHandler<HTMLButtonElement> = (e) =>
    props.onSave({
      title,
      priority,
      assignee,
      content,
      resolved,
    });

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
              {Object.entries(Priority)
                .filter(([k, v]) => isNaN(k as any))
                .map(([k, v]) => (
                  <label className="radio" key={k}>
                    <input
                      type="radio"
                      checked={priority === v}
                      value={v}
                      onChange={handlePriorityChange}
                    />
                    {k}
                  </label>
                ))}
            </div>
          </div>
        </div>
        <div className="column has-text-right">
          <div className="field">
            <div className="control">
              <div className="select">
                <select value={assignee} onChange={handleAssigneeChange}>
                  <option value="">assign to</option>
                  {teamMembers.map((M) => (
                    <option value={M} key={M}>
                      {M}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <textarea
            className="textarea"
            placeholder="content"
            value={content}
            onChange={handleContentChange}
          />
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={resolved}
                  onChange={handleResolvedChange}
                />{" "}
                Resolved{" "}
              </label>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field is-grouped is-grouped-right">
            <div className="control">
              <div className="buttons has-addons">
                <button className="button is-link" onClick={handleSaveClick}>
                  {" "}
                  Save{" "}
                </button>
                <button
                  className="button is-link is-light"
                  onClick={props.onCancel}
                >
                  {" "}
                  Cancel{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
