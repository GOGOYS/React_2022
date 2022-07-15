import React from "react";

function Input(props) {
  const { todo, setTodo, todoList, setTodoList } = props;
  const onChangeText = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const onClickEvent = () => {
    setTodoList([...todoList, todo]);
  };
  return (
    <div>
      <input
        onChange={onChangeText}
        name="t_todo"
        placeholder="할일을 입력하자"
        value={todo.t_todo}
      />
      <button onClick={onClickEvent}>저장</button>
    </div>
  );
}

export default Input;
