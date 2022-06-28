import { useState } from "react";
import View from "./View";

const Write = () => {
  /*
    react의 state변수
    state변수는 처음 저장된 값이 변화가 되면
    자동으로 화면을 reRendering한다.
    state 변수는 useState 함수를 사용하여 선언한다.
    [변수이름, 변수의Setter]

    Setter에 의해 변수가 변화가 되면 변수값이 표출되는 부분의 화면이 갱신된다.
  */
  const [title, setTitle] = useState("Korea");
  /*
    react 에서는 state로 설정된 변수는 직접 값을 변경 할 수 없다.
    title = "우리나라"와 같은 코드는 사용할 수 없다.
    state로 설정된 변수는 반드시 같이 동반 선언된 setter 함수를 통해서
    변화를 시켜야한다.
  */

  const onChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <form>
      <input name="title" value={title} onChange={onChange} />
      <div>{title}</div>
      <View title={title} />
    </form>
  );
};

export default Write;
