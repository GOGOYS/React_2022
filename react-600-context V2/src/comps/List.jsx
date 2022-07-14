import Item from "./item";
import View from "./View";
import AppContext from "../context/Context";
import { useContext } from "react";

//address 의 값을 표 형식으로 구현하기
const List = () => {
  /*
   부모 Container로 부터 props로 전달받던 addrList state 배열을
   AppContext.Provider의 store에서 제공 받는것
  */
  const { addrList } = useContext(AppContext);
  const addrBody = addrList.map((addr) => {
    return <Item addr={addr} />;
  });
  return (
    <>
      <View />
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>전화번호</th>
            <th>주소</th>
          </tr>
        </thead>
        <tbody>{addrBody}</tbody>
      </table>
    </>
  );
};

export default List;
