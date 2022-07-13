// state 변수를 만들기 위하여 useState 함수 import
import { useState } from "react";
import uuid from "react-uuid";
import moment from "moment";

const DietInput = ({ params }) => {
  //params로 전달받은 데이터중에서 필요한 부분만 분해하여
  //변수로 받기
  const { fetchFood, setFoods } = params;
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
    //입력한 데이터를 food에 추가하는 코드
    setFood({ ...food, [name]: value });
  };
  /*
    JS ES5이전 버전에서는 각각의 input box에
    change event를 별도로 생성하고
    d_date : e.target.value와 같은 코드를 작성해야한다.

    현재 JS 버전에서는 하나의 이벤트 핸들러를 통하여 사용할 수 있다.
    {[name] : 값}
  */
  // const onDateChange = (e) => {
  //   setFood({ ...food, d_date: e.target.value });
  // };
  // const onFoodChagne = (e) => {
  //   setFood({ ...food, d_food: e.target.value });
  // };

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

    /*
      react와 node사이에서 데이터를 주고 받는데
      서로 다른 PORT를 통해서 데이터를 주고 받게 되어
      CORS(Cross Origin Resoure Share, 교차 사이트 스크립드 오류)가
      발생한다.
      서버와 서버간의 통신(데이터 교환)이 이루어질때
      보안, 해킹 방지 등을 이유로 점점 많은 곳에서 
      스크립트 교환이 이루어지지 않도록 하고있다.
      CORS 때문에 실제 필요한 API이용에 제한이 많다.
      React, NodeJS가 같은 서버에서 작동될때는
      Package.json에 proxy 설정을 통하여 CORS 문제를 일부 해결 가능하다.

      proxy 설정을 했을 경우에는 fetch URL 부분에 http://localhost:3000 주소를
      생략하고 router 주소만 사용하여 nodejs와 데이터를 주고받는다.
    */
    const res = await fetch("/food/insert", postOption);
    if (res.ok) {
      const json = await res.json();
      console.log(json);
      fetchFood().then((result) => {
        setFoods(result);
      });
    }
    setFood({
      d_id: uuid(),
      d_date: moment().format("YYYY[-]MM[-]DD"),
      d_food: "",
      d_qty: "",
      d_kcal: "",
    });
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
          value={food.d_date}
          onChange={onChange}
        />
      </div>
      <div className="w3-col s2 m2 l2">
        <input
          type="text"
          name="d_food"
          className="w3-input"
          placeholder="메뉴를 입력하세요"
          value={food.d_food}
          onChange={onChange}
        />
      </div>
      <div className="w3-col s2">
        <input
          type="text"
          name="d_qty"
          className="w3-input"
          placeholder="섭취 수량을 입력하세요"
          value={food.d_qty}
          onChange={onChange}
        />
      </div>
      <div className="w3-col s2">
        <input
          type="text"
          name="d_kcal"
          className="w3-input"
          placeholder="단위 칼로리를 입력하세요"
          value={food.d_kcal}
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
