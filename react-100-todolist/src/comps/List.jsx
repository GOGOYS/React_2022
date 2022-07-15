import Item from "./Item";

const List = (props) => {
  const { todo, setTodo, todoList, setTodoList } = props;
  const todoBody = todoList.map((todoList) => {
    return <Item todoList={todoList} key={todoList.t_id} />;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>할일</th>
        </tr>
      </thead>
      <tbody>{todoBody}</tbody>
    </table>
  );
};

export default List;
