const DietList = ({ params }) => {
  //params로 전달받은 데이터중에서 필요한 부분만 분해하여
  //변수로 받기
  const { foods, removeFoodItem } = params;
  const removeEvent = (e, d_id) => {
    //표준 JS 함수중에 react에서 사용할 수 없는 함수들이 일부 있다.
    //그중에 confirm 함수도 자체지원이 되지 않아 browser의 함수를
    //호출하기 위해 window.confirm()을 쓴당( alret 대체)
    if (window.confirm(d_id + " 데이터 삭제??")) {
      removeFoodItem(d_id);
    }
  };
  //map을 사용하여 foods 배열의 데이터를
  //tr, td를 갖는 list body 요소를 생성하기
  const foodBody = foods.map((food) => {
    return (
      <tr key={food.d_id}>
        <td>{food.d_date}</td>
        <td>{food.d_food}</td>
        <td>{food.d_qty}</td>
        <td>{food.d_kcal}</td>
        <td>{food.d_qty * food.d_kcal}</td>
        <td
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            removeEvent(e, food.d_id);
          }}
        >
          &times;
        </td>
      </tr>
    );
  });
  return (
    <table className="w3-table w3-table-all">
      <thead>
        <tr>
          <th>날짜</th>
          <th>메뉴명</th>
          <th>섭취량</th>
          <th>단위 칼로리</th>
          <th>총 칼로리</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>{foodBody}</tbody>
    </table>
  );
};
export default DietList;
