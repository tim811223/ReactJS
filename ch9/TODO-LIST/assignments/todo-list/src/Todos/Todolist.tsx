import { FC } from "react";
import { TodoItem } from "./TodoItem";
import { getTodoItems } from "./utils/getTodoItems";

export const Todolist: FC = () => {
  const Items = getTodoItems(10);
  const todoItems = Items.map((i) => <TodoItem {...i} />);

  return <>{todoItems}</>;
};
