import { FC } from "react";
import "bulma/css/bulma.min.css";

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

export const TodoItem: FC<Props> = ({ title, content, priority, resolved }) => {
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
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">{content}</div>
      </article>
    </>
  );
};
