import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoLIst";
import moment from "moment";

const TodoMain = () => {
  const [todoList, setTodoList] = useState([]);
  const insert_todo = (content) => {
    //여기는 TodoInput이 전달해준 todo를 todoList에 추가하는 곳
    const todo = {
      t_id: "",
      t_s_date: moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
      content,
      t_e_date: "",
    };

    //todoList 배열을 모두 복사하고
    //끝에 todo를 추가하여
    //todoBody 배열을 생성하라
    const todoBody = [...todoList, todo];
    setTodoList(todoBody);
  };
  return (
    <div class="w3-container w3-margin">
      {/* TodoInput야 insert_todo 함수를 너에게 보낸다*/}
      <TodoInput insert_todo={insert_todo} />
      <TodoList todoList={todoList} />
    </div>
  );
};

export default TodoMain;
