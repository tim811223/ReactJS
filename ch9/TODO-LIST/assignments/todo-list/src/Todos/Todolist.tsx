import { FC, useState } from "react";
import { TodoItem } from "./TodoItem";
import { TodoItemModel, getTodoItems } from "./utils/getTodoItems";

const Items = getTodoItems(10);

export const Todolist: FC = () => {
  const [todos, setTodo] = useState<TodoItemModel[]>(Items);

  return (
    <>
      {todos.map((i) => (
        <TodoItem {...i} key={i.id} />
      ))}
    </>
  );
};
