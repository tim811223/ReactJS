import { FC, useState } from "react";
import { TodoItem } from "./TodoItem";
import { TodoItemModel, getTodoItems } from "./utils/getTodoItems";
import { Editor, TodoItemModel as newItemModel } from "./Editor";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuid } from "uuid";

const Items = getTodoItems(10);

export const Todolist: FC = () => {
  /*************
   * State Area
   * ***********/
  const [todos, setTodos] = useState<TodoItemModel[]>(Items);
  const [createing, setCreateing] = useState<boolean>(false);

  /*************
   * Todo Area
   * ***********/
  const createTodo = (newTodo: TodoItemModel) => {
    setTodos([...todos, newTodo]);
  };
  const updateTodo = (id: string, update: Partial<TodoItemModel>) => {
    /** { ...i, ...update } 這表示原來的資料跟更新的資料合併, 若重複的內容update會蓋掉原來的資料 **/
    setTodos(todos.map((i) => (i.id === id ? { ...i, ...update } : i)));
  };
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((i) => i.id !== id));
  };

  /*************
   * Handler Area
   * ***********/
  const handleCreateTodo = (todo: newItemModel) => {
    const t = Date.now();
    createTodo({ id: uuid(), createdAt: t, lastModifiedAt: t, ...todo });
    setCreateing(false);
  };

  return (
    <>
      <FontAwesomeIcon
        icon={faSquarePlus}
        size="2xl"
        onClick={() => setCreateing(true)}
      />
      <br />
      {createing && (
        <Editor
          onSave={(todo) => {
            handleCreateTodo(todo);
          }}
          onCancel={() => setCreateing(false)}
        />
      )}

      <br />

      {todos.map((i) => (
        <TodoItem
          {...i}
          key={i.id}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </>
  );
};
