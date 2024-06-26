import { FC, useState } from "react";
import "bulma/css/bulma.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Editor } from "./Editor";

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
}

export const TodoItem: FC<Props> = ({
  id,
  title,
  content,
  priority,
  assignee,
  resolved,
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

  return (
    <>
      {editing ? (
        /** 編輯畫面 **/
        <Editor {...(id, title, content, priority, assignee, resolved)} />
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
              <FontAwesomeIcon icon={faTrash} className="is-clickable" />
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
