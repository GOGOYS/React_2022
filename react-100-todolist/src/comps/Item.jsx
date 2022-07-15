import { set } from "mongoose";
import { useState } from "react";

const complete = ["", "완료"];

function Item(props) {
  const { todoList, setTodoList, setTodo, todo, onTodoClick } = props;

  return (
    <tr>
      <td onClick={() => onTodoClick(todoList.t_id)}>{todoList.t_todo}</td>
      <td>{complete[1]}</td>
    </tr>
  );
}

export default Item;
