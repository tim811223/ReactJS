import { FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Editor } from "./Editor";
import { TodoItemModel } from "./utils/getTodoItems";

export enum Priority {
  HIGH,
  MEDIUM,
  LOW,
}

export interface Props {
  id: string;
  title: string;
  content: string;
  priority: Priority;
  assignee?: string;
  resolved: boolean;
  updateTodo: (id: string, update: Partial<TodoItemModel>) => void;
  deleteTodo: (id: string) => void;
}

export const TodoItem: FC<Props> = ({
  id,
  title,
  content,
  priority,
  assignee,
  resolved,
  updateTodo,
  deleteTodo,
}) => {
  var Types = "";
  Types =
    priority == Priority.HIGH
      ? "is-danger"
      : priority == Priority.MEDIUM
        ? "is-warning"
        : priority == Priority.LOW
          ? "is-info"
          : "";

  /*************
   * State Area
   * ***********/
  const [editing, setEditing] = useState<boolean>(false);

  /*************
   * Handler Area
   * ***********/
  const handleEditingClick = () => setEditing(true);
  const handleCancelClick = () => setEditing(false);
  const handleDeleteClick = () => deleteTodo(id);

  return (
    <>
      {editing ? (
        /** 編輯畫面 **/
        <Editor
          {...{
            id,
            title,
            content,
            priority,
            assignee,
            resolved,
            onCancel: handleCancelClick,
            updateTodo,
            deleteTodo,
          }}
        />
      ) : (
        /** 清單畫面 **/
        <article className={`message ${Types}`}>
          <div className="message-header">
            <p>{title}</p>
            <span>
              <FontAwesomeIcon
                icon={faPenToSquare}
                className="is-clickable mr-1"
                onClick={handleEditingClick}
              />
              <FontAwesomeIcon
                icon={faTrash}
                className="is-clickable"
                onClick={handleDeleteClick}
              />
            </span>
          </div>
          <div className="message-body">
            <div>{content}</div>
            <div className="columns">
              <div className="column">
                <span className=" has-text-grey is-size-7">{`ID ${id}`}</span>
              </div>
              <div className="column has-text-right">
                {assignee ? (
                  <span className=" has-text-grey is-size-7">{`assigned to @${assignee}`}</span>
                ) : null}
              </div>
            </div>
          </div>
        </article>
      )}
    </>
  );
};
