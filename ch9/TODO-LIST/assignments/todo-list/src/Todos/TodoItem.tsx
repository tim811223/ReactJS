import { FC } from "react";
import "bulma/css/bulma.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export enum Priority {
  HIGH,
  MEDIUM,
  LOW,
}

export interface Props {
  title: string;
  content: string;
  priority: Priority;
  assignee?: string;
  resolved: boolean;
}

export const TodoItem: FC<Props> = ({
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

  return (
    <>
      <article className={`message ${Types}`}>
        <div className="message-header">
          <p>{title}</p>
          <span>
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="is-clickable mr-1"
            />
            <FontAwesomeIcon icon={faTrash} className="is-clickable" />
          </span>
        </div>
        <div className="message-body">
          <div>{content}</div>
          <div className="has-text-right">
            {assignee ? (
              <span className=" has-text-grey is-size-7">{`assigned to @${assignee}`}</span>
            ) : null}
          </div>
        </div>
      </article>
    </>
  );
};
