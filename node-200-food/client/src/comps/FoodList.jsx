const FoodList = ({ foodList }) => {
  const foodBody = foodList.map((food) => {
    return (
      <tr>
        <td>{food.f_date}</td>
        <td>{food.f_title}</td>
        <td>{food.f_eat}</td>
        <td>{food.f_kcal}</td>
        <td>{food.f_totalkcal}</td>
      </tr>
    );
  });
  return (
    <table className="w3-table w3-table-all">
      <thead>
        <tr>
          <th>날짜</th>
          <th>식품명</th>
          <td>섭취량</td>
          <td>칼로리</td>
          <td>총 칼로리</td>
        </tr>
      </thead>
      <tbody>{foodBody}</tbody>
    </table>
  );
};

export default FoodList;
