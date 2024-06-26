import { FC } from "react";
import { TodoItem } from "./TodoItem";
import { getTodoItems } from "./utils/getTodoItems";

const Items = getTodoItems(10);

export const Todolist: FC = () => {
  const todoItems = Items.map((i) => <TodoItem {...i} />);

  return <>{todoItems}</>;
};
