/*
  use로 시작되는 react의 함수들
  Hook 함수라고 한다
  component lifecycle과 관련된 함수들이다
  state 만들거나, state 변화를 감시하거나
  component가 rendering 되는 기점에 무언가를 실행시키거나
  하는 용도의 함수들이다.
*/

import { useState, useEffect } from "react";
import uuid from "react-uuid";
import moment from "moment";
import BucketList from "./BucketList";

/*
    함수를 선언하고 함수에서 컨포넌트 코드를 return 한다
    이때 return 내의 컴포넌트 tag의 가장 바깥을 감싸서
    한개의 tag로 묶어주어야 한다.
*/

const BucketMain = () => {
  /*buckList state 변수를 배열로 선언하기
    state 변수를 배열로 선언하여 사용할 경우
    표준 JS 코드에 있는 배열에 요소를 추가하는 함수를 사용할 수 없다.
    state 배열에 요소를 추가하는 경우는 setter 함수를 사용하는데
    이 함수가 작동되는 방식은
    기존의 배열을 새로운 배열로 복사하고, 요소를 추가한 후
    새로운 배열과 기존의 배열을 교환하는 방식으로 이루어진다.
  */
  const [bucketList, setBucketList] = useState(() => {
    /*
      현재 브라우저의 localStorage에 BUCKETLIST 이름으로
      데이터가 저장되어 있으면 데이터를 읽어서 JSON 데이터로 
      변환한 후 BUCKETLSIT를 생성하고
      없으면 빈(blank) 배열을 생성하라
    */
    const bucketBody = JSON.parse(localStorage.getItem("BUCKETLIST"));
    if (bucketBody) return bucketBody;
    else return [];
  });

  //버킷리스트에 변화가 생기면 내부 코드실행
  /*
    bucketList 데이터가 추가, 수정, 삭제가 되면
    localStorage에 BUKETLIST라는 이름으로 JSON데이터를 
    문자열로 변환하여 저장
  */
  useEffect(() => {
    console.log("EFFECT");

    localStorage.setItem("BUCKETLIST", JSON.stringify(bucketList));
  }, [bucketList]);

  //버킷을 추가할때 사용하는 함수
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      const bucket = {
        b_id: uuid(), //uuid를 사용하여 Bucket PK 생성
        b_flag: 0, //중요도를 표시하는 데이터
        b_start_date: moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
        b_bucket: e.target.value,
        b_end_date: "",
      };
      setBucketList([...bucketList, bucket]);
      console.table(bucketList);
      e.target.value = "";
    }
  }; // end onKeyDown

  const bucket_delete = (id) => {
    const bucketRemoveList = bucketList.filter((bucket) => {
      return bucket.b_id !== id;
    });

    setBucketList(bucketRemoveList);
  }; // end bucket_delete

  //중요도 칼럼을 클릭했을때
  //중요도 항목을 변경 시킬 수 있도록 b_flag 변수값을 변경하는 함수
  const bucket_flag_toggle = (id) => {
    //map(forEach)를 사용하여 전체 리스트를 반복하면서
    //id가 일치하는 항목을 찾아 flag 값을변경할 것이다.
    const bucketBody = bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        //원래의 bucket 데이터를 spread(펼치기)하고
        //b_flag 값만 원의 b_flag 값에 1을 덧셈하여 변경하고
        //새로운 _temp_bucket에 복제해라
        const _temp_bucket = { ...bucket, b_flag: bucket.b_flag + 1 };
        //복제한 _temp_bucekt을 retrun하여
        //bucketBody를 다시 작성한다.
        return _temp_bucket;
      }

      //id가 일치하지 않는 데이터는 변경하지 말고 원래 데이터를 retrun
      return bucket;
    }); // end map
    //새로 생성된 bucketBody로 기존 bucketList 배열을 교체
    setBucketList(bucketBody);
  }; // end bucker_flag_toggle

  const bucket_complete = (id) => {
    const bucketBody = bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        const e_date = bucket.b_end_date
          ? ""
          : moment().format("YYYY[-]MM[-]DD HH:mm:ss");

        return { ...bucket, b_end_date: e_date };
      }
      return bucket;
    });
    setBucketList(bucketBody);
  }; // end bucket_complete

  const bucket_item_edit = (id, content) => {
    const bucketBody = bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        const _temp_bucket = { ...bucket, b_bucket: content };
        return _temp_bucket;
      }

      return bucket;
    });
    setBucketList(bucketBody);
  };

  /*
  const functions = {
    bucket_delete : bucket_delete,
    bucket_flag_toggle : bucket_flag_toggle,
    bucket_complet : bucket_complet,
  }
  */
  //json 객체의 속성 변수 이름과 값(함수)이 일치 할때는
  //변수 명 만으로 JSON 객체를 선언하면 위의 코드와 같이 생성한다.
  const functions = {
    bucket_delete,
    bucket_flag_toggle,
    bucket_complete,
    bucket_item_edit,
  };
  /*
  react code에서 component간의 계층구조가 매우 복잡할 수 있다.
  복잡한 계츨 구조에서 데이터의 CRUD를 구현할때
  데이터를 호출하기 위하여 변수={값} 형식으로 자식 comp에게 전달하고
  자식 comp는 props를 통해 데이터를 받아서 표출한다.
  이때 만약 자식 comp에서 부모 comp가 생성, 선언한 state 변수를
  변경해야 할 경우가 발생하면 부모 comp에서 state 변수를 변경하는
  함수를 함께 만들어 자식 comp에게 전달해 주어야한다.

  지금 <td onClick={() => bucket_complete(item.b_id)}>{item.b_end_date}</td>
  를 보면 현재 화면comp에 선언된 td가 클릭되었을때 bucket_complete 함수를
  실행하고 있지만 이 함수는 BucketMain에서 만들어 내려보낸 함수이다.

  */
  return (
    <div>
      <div>
        <input
          onKeyDown={onKeyDown}
          placeholder="버킷에 추가할 내용을 입력하세요"
          className="w3-input w3-border w3-hover-gray w3-round"
        />
      </div>
      <div>
        <BucketList bucketList={bucketList} functions={functions} />
      </div>
    </div>
  );
};

export default BucketMain;
