import Item from "./item";

//address 의 값을 표 형식으로 구현하기
const List = ({ addrList }) => {
  const addrBody = addrList.map((addr) => {
    return <Item addr={addr} />;
  });
  return (
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
  );
};

export default List;
