// state 변수를 만들기 위하여 useState 함수 import
import { useState } from "react";
import uuid from "react-uuid";
import moment from "moment";

const DietInput = () => {
  /*
         state 변수를 만들땐 return위에다가 만들어야한다
         JSON type의 food state 변수 생성
    */
  const [food, setFood] = useState({
    d_id: uuid(),
    d_date: moment().format("YYYY[-]MM[-]DD"),
    d_food: "",
    d_qty: "",
    d_kcal: "",
  });

  /*
    ({ [e.target.name]: e.target.value })
    e.target.name에 저장된 name값으로 변수를 만들고
    변수이름 : value로 값이 채워진다.
  */
  const onChange = (e) => {
    /*
        input box에서 내용입력(onChange) 이벤트가 발생하면
        input box가  e.target에 담겨 전달된다
        input box의 name 속성과 value를 분해하여 각각 변수에 담기
        name 변수와 value 변수가 분해되고 각각의 별도 변수로 생성된다.
        각각 별도 변수로 선언된 속성을 사용하여 food JSON 객체에 값을 담는다.
    */
    const { name, value } = e.target;
    setFood({ ...food, [name]: value });
  };
  /*
    JS ES5이전 버전에서는 각각의 input box에
    change event를 별도로 생성하고
    d_date : e.target.value와 같은 코드를 작성해야한다.

    현재 JS 버전에서는 하나의 이벤트 핸들러를 통하여 사용할 수 있다.
    {[name] : 값}
  */
  const onDateChange = (e) => {
    setFood({ ...food, d_date: e.target.value });
  };
  const onFoodChagne = (e) => {
    setFood({ ...food, d_food: e.target.value });
  };

  /*
    onclick 함수 실행시
    input박스에 입력한 값이 POST 방식으로
    JSON화 시켜서
    http:/localhost:3000/food/insert주소로 보낸다
  */
  const onClick = async (e) => {
    const postOption = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(food),
    };
    const res = await fetch("http://localhost:3000/food/insert", postOption);
    if (res.ok) {
      const json = await res.json();
      console.log(json);
    }
  };
  /*
        w3-row-padding를 사용하면 전체화면을 12등분으로 나눈 그리드를 만든다
        그 안의 요소에 w3-col s2를 사용하면 12등분중에 2등분의 크기만큼 범위를 지정
        s2 스마트폰, m2 타블렛 화면, l2 데스크탑 화면
    */
  return (
    <div className="w3-row-padding">
      <div className="w3-col s2">
        <input
          type="date"
          name="d_date"
          className="w3-input"
          defaultValue={food.d_date}
          onChange={onChange}
        />
      </div>
      <div className="w3-col s2 m2 l2">
        <input
          type="text"
          name="d_food"
          className="w3-input"
          placeholder="메뉴를 입력하세요"
          onChange={onChange}
        />
      </div>
      <div className="w3-col s2">
        <input
          type="text"
          name="d_qty"
          className="w3-input"
          placeholder="섭취 수량을 입력하세요"
          onChange={onChange}
        />
      </div>
      <div className="w3-col s2">
        <input
          type="text"
          name="d_kcal"
          className="w3-input"
          placeholder="단위 칼로리를 입력하세요"
          onChange={onChange}
        />
      </div>
      <div className="w3-col s2">
        <button className="w3-button w3-primary" onClick={onClick}>
          저장하기
        </button>
      </div>
    </div>
  );
};
export default DietInput;
