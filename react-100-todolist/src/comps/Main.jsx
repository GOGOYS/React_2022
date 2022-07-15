import { useState, useEffect } from "react";
import Input from "./Input";
import List from "./List";
import uuid from "react-uuid";

const Main = () => {
  const [todo, setTodo] = useState({
    t_id: uuid(),
    t_chick: 0,
    t_todo: "",
  });
  const [todoList, setTodoList] = useState([]);

  const onTodoClick = (t_id) => {
    const todoBody = todoList.map((todo) => {
      if (todo.t_id === t_id) {
        const temp_todo = { ...todo, t_clcik: todo.t_click + 1 };
        return temp_todo;
      }
      return todo;
    });
    setTodoList(todoBody);
  };

  return (
    <div>
      <div className="w3-aqua">
        <h1>오늘 할 일</h1>
      </div>
      <Input
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <List
        todoList={todoList}
        setTodoList={setTodoList}
        todo={todo}
        setTodo={setTodo}
        onTodoClick={onTodoClick}
      />
    </div>
  );
};

export default Main;
