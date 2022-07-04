import { useState, useEffect } from "react";
import { zoneCode } from "../module/StnNo";
// DataApi.js에 정의된 fetchData 함수를 사용하겠다.
import { fetchData } from "../module/DataApi.js";
const ApiMain = () => {
  const [text, setText] = useState("Korea");
  const [data, setData] = useState([]);

  /*
    useEffect
    react 의 생명주기 함수 
    컴포넌트가 만들어질때, 컴포넌트가 reandering될때
    자동으로 실행되는 함수
  */
  useEffect(() => {
    //fetchData함수를 호출하여 return되는 결과를 result변수에 담고
    //result 변수의 값을 추출하기
    fetchData().then((result) => {
      console.log(result);
      const item = result.response.body.items.item;
      setText(JSON.stringify(item));
      setData([...item]);
    });
  }, []);

  const itemBody = data.map((item) => {
    return (
      <tr>
        <td>{item.title}</td>
        <td>{zoneCode[item.stnId][0]}</td>
        <td>{zoneCode[item.stnId][1]}</td>
        <td>{item.tmSeq}</td>
        <td>{item.tmFc}</td>
      </tr>
    );
  });
  return <table className="w3-table w3-table-all">{itemBody}</table>;
};

export default ApiMain;
