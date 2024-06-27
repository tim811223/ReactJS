import { FC, useState } from "react";
import { TodoItem } from "./TodoItem";
import { TodoItemModel, getTodoItems } from "./utils/getTodoItems";

const Items = getTodoItems(10);

export const Todolist: FC = () => {
  const [todos, setTodos] = useState<TodoItemModel[]>(Items);
  const updateTodo = (id: string, update: Partial<TodoItemModel>) => {
    /** { ...i, ...update } 這表示原來的資料跟更新的資料合併, 若重複的內容update會蓋掉原來的資料 **/
    setTodos(todos.map((i) => (i.id === id ? { ...i, ...update } : i)));
  };

  return (
    <>
      {todos.map((i) => (
        <TodoItem {...i} key={i.id} />
      ))}
    </>
  );
};
