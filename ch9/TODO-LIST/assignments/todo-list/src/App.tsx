// import { Editor } from "./Todos/Editor";
// import { TodoItem, Priority } from "./Todos/TodoItem";
import "bulma/css/bulma.min.css";
import { Todolist } from "./Todos/Todolist";

export const App = () => {
  const todo = {
    id: "id0",
    title: "Title",
    priority: 0,
    assignee: "bob",
    content: "Content",
    resolved: false,
  };

  return (
    <>
      {/*
      <Editor {...todo} />

      <TodoItem {...todo} />
    */}
      <Todolist />
    </>
  );
};
