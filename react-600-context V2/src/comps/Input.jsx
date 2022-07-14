// store(Context.Provider) import
import AppContext from "../context/Context";
import { useContext } from "react";
const Input = () => {
  //Context.Provider store에 보관된 변수와 함수를 사용요청하는 것
  const { address, setAddress, addrList, setAddrList } = useContext(AppContext);
  //address state (객체)변수에서 각각 요소를 추출 : inputbox 사용용
  const { a_name, a_tel, a_address } = address;
  /*
  input box의 value속성에 변수를 할당하면
  input box는 readOnly 상태가 된다
  만약 화면의 input box에 키보드로 문자열을 입력하면
  value속성에 연결된 변수(state, 일반)의 값을
    직접 변경하는 성질이 발생한다.
    react에서는 state변수를 임의로 변경하는것이 금지되어 있다
    이러한 특성을 유지하기 위하여 value={변수} 형태로
    할당이되면 read only 성질이 발생한다.
    
    이럴때 defaultValue를 사용하여 변수를 할당 할 수도 있지만
    간혹 defaultValue로 설정된 변수값은 state의 특성을 제대로
    발휘 하지 못한다. 그래서 defaulValue보다는 value속성을 사용한다.
    
    inputbox의 문자열을 키보드로 입력하면
    inputbox의 onChange evnet를 사용하여 setState() 함수를 통하여
    state변수에 값을 변경하도록 하는 코드를 작성해야 한다.
    
    inputbox에 입력된 문자열을 onChange 이벤트가 가로채고 
    가로챈 문자열을 setState 함수를 통하여 state변수를 변경하고
    state의 rendering 특성에따라 inputbox의 문자열이
    나타나는 코드가 만들어진다.
    */
  const onChangeEvent = (e) => {
    /*
      e.target.name과 e.target.value 속성을
      각각 name, value 변수로 추출하기
    */
    const { name, value } = e.target;
    /*  
      JS에서는 변수에 담긴 문자열을
      직접 변수명으로 생성하는 방법이 있다.
      const name="a_tel"이라는 변수가 있을때
      [name]형식으로 사용하면 마치 a_tel 이라는
      변수가 만들어 진것처럼 사용할 수 있다.
      event 핸들러의 e.target.name 값을 이용하여
      각 input가 공통으로 사용할 수 있는 
      코드 작성이 가능하다
    */
    //[name]= value
    setAddress({ ...address, [name]: value });
    // 다음의 코드는 각각 input의 evnet에 따라서
    //setAddress({...address, a_name: value });
    //setAddress({...address, a_tel: value });
    //setAddress({...address, a_address: value });
    //의 코드가 생성된다.
    /*
      setAddress(...address, { [name]: value });
      이 코드는 기존의 address에 담긴 데이터를 복사하면서
      {[name]: value} 코드의 name 변수에 해당하는 값만 변경한다.
    */
    //react 에서는 stete변수 = 값과 같은 코드는 절대 금지이므로
    // 바드시 setState 함수를 사용하여 값을 변경해야한다.
    // 때문에 Main의 setAddress 함수를 props로 전달받아 사용해야한다.
  };

  /*
    저장 버튼을 클릭하면 address에 담긴 데이터를 addrList에 추가하기
    addrList도 Main에서 만든 state배열이다
    때문에 addrList에 데이터를 추가하려면 Main에서 함수를 생성하여
    props로 전달하고 여기의 onClick이벤트에서 호출하여
    addrList에 추가한다.

    Main setAddrList 함수를 props로 전달받고
    setAddrList 함수를 사용하여 addrList에 추가하는 코드를 작성한다.
  */
  const onClickEvent = () => {
    //addrList 배열을 복제하고 address state 변수를 추가하여
    //새로운 addrList를 setting
    setAddrList([...addrList, address]);
  };
  return (
    <>
      <input
        onChange={onChangeEvent}
        name="a_name"
        placeholder="이름"
        value={a_name}
      />
      <input
        onChange={onChangeEvent}
        name="a_tel"
        placeholder="전화번호"
        value={a_tel}
      />
      <input
        onChange={onChangeEvent}
        name="a_address"
        placeholder="주소"
        value={a_address}
      />
      <button onClick={onClickEvent}>저장</button>
    </>
  );
  // 각각의 분해된 요소를 사용할 수 있음.
  // a_name / address.a_name / props.address.a_name 다 같은 말
};

export default Input;
