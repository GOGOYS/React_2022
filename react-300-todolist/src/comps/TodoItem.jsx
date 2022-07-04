const TodoItem = ({ todo }) => {
  return (
    <tr>
      <td>{todo.content}</td>
      <td>{todo.t_s_date}</td>
    </tr>
  );
};
export default TodoItem;
