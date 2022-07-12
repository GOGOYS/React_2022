/*
  useState는 state변수를 선언할때 사용하는 함수
  useEffect는 React의 생명주기 함수로
  Component가 rendering될때 자동으로 코드를 실행하여
  node 서버로부터 데이터를 fetch(SELECT ALL)하여 
  state 변수에 담는 코드가 작성될 곳이다.
*/
import { useState, useEffect } from "react";
import DietInput from "./DietInput";
import DietList from "./DietList";

/*
  mongoDB에서 데이터들을 fetch하여 List를 보여줄 예정인데
  List를 보여주고 그 다음에 item을 클릭하거나 변경하는 코드를
  추가하려면 어디에서 state데이터를 만들어야할것인가를 잘 고민하자!

  DietMain에서 DB를 fetch하고 item등을 변화시키는 evnet도 선언하여
  Main Conponent가 감싸고 있는 child Component 들이 공유할 수 있도록
  설계를 한다!
*/
const DietMain = () => {
  //useState와 useeEffect는 함수 내부에서 실행될 코드이다.
  const [foods, setFoods] = useState([]);

  //데이터를 fetch할때 사용할 함수 선언하기
  const fetchFood = async () => {
    //async를 사용할때는 await을 사용하여 fetch문을 만들어야한다.
    const res = await fetch("/food/selectAll");
    if (res.ok) {
      return await res.json();
    }
    //서버에 selectAll을 해서 가져온값을 json데이터로 반환
  };

  //DietMain 컴포넌트가 렌더링될때 실행하여
  //fetch함수를 호출하고 결과를
  //foods state변수에 세팅하기
  /*
    useEffect의 두번째 매개변수
    두번째 매개변수에 state변수를 설정하면
    state 변수값이 변화될때마다 useEffect함수가 실행된다
    state변수의 변화를 감지하여 어떤 event를 실행할때 사용하는 방법

    두번째 매개변수를 빈(blank)배열([])을 설정하면
    컴포넌트가 렌더링될때 한번만 실행하도록 하는 방법
    두번째 매개변수를 생략하게되면 useEffect함수가 
    무한반복적으로 실행된다.
  */
  useEffect(() => {
    //async 함수가 return한 값을 비동기 callback 방식으로 처리하기
    //async 함수로 반환한 값은 .then(result)함수로 받아야한다.
    fetchFood().then((result) => {
      console.table(result);
      setFoods(result);
    });
  }, []);

  /*
  배열.filter() 함수를 사용하여 전달받은
  삭제할 d_id와 일치하지 않는 데이터만 추출하기
  그러면 삭제할 데이터만 return 한다
  */
  const removeFoodItem = (d_id) => {
    // { method: "DELETE" }를 넣음으로써 DELETE 방식으로 요청을 함
    fetch(`/food/remove/${d_id}`, { method: "DELETE" })
      .then((res) => res.text)
      .then((result) => {
        const filterBody = foods.filter((food) => food.d_id !== d_id);
        setFoods(filterBody);
      });
  };

  /*
  child 컴포넌트에 전달해야할 데이터와 함수가 많아지는 경우
  개별적으로 전달하는 것보다 하나의 객체로 묶어서 전달하기
  */
  const params = {
    foods,
    removeFoodItem,
    fetchFood,
    setFoods,
  };

  //DietList와 DietInput에게 params에 담긴
  //데이터와 함수를 한꺼번에 전달하기
  return (
    <>
      <DietList params={params} />
      <DietInput params={params} />
    </>
  );
  // return (
  //   <>
  //     <DietList foods={foods} removeFoodItem={removeFoodItem} />
  //     <DietInput fetchFood={fetchFood} setFoods={setFoods} />
  //   </>
  // );
};

// 다른 컴포넌트에서 import 하기 위하여 현재 함수를 export 해주기
export default DietMain;
