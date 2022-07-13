import { useContext } from "react";
import DietContext from "../context/DietContext";
import DietItem from "./DietItem";
const DietList = ({ params }) => {
  //params로 전달받은 데이터중에서 필요한 부분만 분해하여
  //변수로 받기
  //const { foods } = params;

  const { foods } = useContext(DietContext);

  //map을 사용하여 foods 배열의 데이터를
  //tr, td를 갖는 list body 요소를 생성하기
  const foodBody = foods.map((food) => {
    return <DietItem food={food} />;
  }); // end removeEvent

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
