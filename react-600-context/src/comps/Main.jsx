//react로 부터 useState 함수를 추출하기
// const userState = ()=>{}
// export {useState}
import { useState } from "react";
// export default ...
import Input from "./Input";
import List from "./List";
import View from "./View";

const Main = () => {
  //address state 변수가 생성되고
  //address state 변수를 변경시키는 setAddress 함수를 선언
  const [address, setAddress] = useState({
    a_name: "홍홍홍",
    a_tel: "012-3456-7890",
    a_address: "aa",
  });

  const [addrList, setAddrList] = useState([]);
  return (
    <>
      <Input
        address={address}
        setAddress={setAddress}
        addrList={addrList}
        setAddrList={setAddrList}
      />
      <View address={address} />
      <List addrList={addrList} />
    </>
  );
};

export default Main;
