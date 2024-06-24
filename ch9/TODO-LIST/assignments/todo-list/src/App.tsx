import { TodoItem, Priority } from "./Todos/TodoItem";
import { Todolist } from "./Todos/Todolist";

export const App = () => {
  return (
    <>
      <TodoItem
        title={"title"}
        content={"content"}
        priority={Priority.LOW}
        resolved={false}
      />

      <Todolist />
    </>
  );
};
