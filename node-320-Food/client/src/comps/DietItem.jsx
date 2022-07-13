import { useState, useContext } from "react";
import DietContext from "../context/DietContext";
//params로 전달받은 데이터중에서 필요한 부분만 분해하여
//변수로 받기
const DietItem = ({ food }) => {
  /*
     식품명 표시된 곳을 click 했을때 input box가 나타나도록 하려고 한다
     1. DietList에서 isEdit state 변수를 만들고 item을 생성하면서
     isEdit 변수의 상태에 따라 input box 또는 그냥 문자열이 나타 나도록 하였다.
     => 모든 item이 isEdit 상태들 공유하게 되어 한개의 항목을 클릭하면
     모든 항목에 input box가 나타났다.

     2. DietItem을 별도로 분리하고 DietItem에서 isEdit 상태 변수를 
     생성한 후 같은 코드로 input box가 나타나도록 하였다.
     똑같은 이름의 isEdit이지만 각 item마다 서로다른 isEdit를 만들게 되어
     클릭한 item만 input box가 나타나도록 변경된다.
    */
  const [isEdit, setEdit] = useState(false);

  const { removeFoodItem } = useContext(DietContext);
  const removeEvent = (e, d_id) => {
    //표준 JS 함수중에 react에서 사용할 수 없는 함수들이 일부 있다.
    //그중에 confirm 함수도 자체지원이 되지 않아 browser의 함수를
    //호출하기 위해 window.confirm()을 쓴당( alret 대체)
    if (window.confirm(d_id + " 데이터 삭제??")) {
      removeFoodItem(d_id);
    }
  };

  const onEdit = (e) => {
    setEdit(true);
  };

  const onKeyPress = (e) => {
    if (e.keyCode === 13) {
      setEdit(false);
    }
  };
  return (
    <tr key={food.d_id}>
      <td>{food.d_date}</td>
      {isEdit ? (
        <td>
          <input
            name="d_food"
            defaultValue={food.d_food}
            onKeyDown={onKeyPress}
          />
        </td>
      ) : (
        <td onClick={onEdit}>{food.d_food}</td>
      )}
      <td>{food.d_qty}</td>
      <td>{food.d_kcal}</td>
      <td>{food.d_qty * food.d_kcal}</td>
      <td
        style={{ cursor: "pointer" }}
        onClick={(e) => removeEvent(e, food.d_id)}
      >
        &times;
      </td>
    </tr>
  );
};

export default DietItem;
