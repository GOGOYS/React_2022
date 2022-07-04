import React, { useState } from "react";

const b_flag_text = ["일반", "중요", "매우중요", "긴급"];

function BucketItem(props) {
  const { item, functions } = props;
  const {
    bucket_delete,
    bucket_flag_toggle,
    bucket_complete,
    bucket_item_edit,
  } = functions;

  const [bucket_IsEdit, setEdit] = useState(false);

  // onClick으로 함수를 실행시킬때마다 값을 true와 false로 반전시킴
  const bucket_edit = (e) => {
    setEdit(!bucket_IsEdit);
  };

  const bucket_edit_complete = (e, id) => {
    if (e.keyCode === 13) {
      // ENTER
      bucket_item_edit(id, e.target.value);
      setEdit(false);
    } else if (e.keyCode === 27) {
      // ESC
      setEdit(false);
    }
  };

  return (
    <tr className={item.b_end_date ? "cancel" : ""}>
      <td onClick={() => bucket_flag_toggle(item.b_id)}>
        {b_flag_text[item.b_flag % 4]}
      </td>
      <td>{item.b_start_date}</td>
      {bucket_IsEdit && item.b_end_date === "" ? (
        <td>
          <input
            defaultValue={item.b_bucket}
            onKeyDown={(e) => bucket_edit_complete(e, item.b_id)}
          />
        </td>
      ) : (
        <td onClick={bucket_edit}>{item.b_bucket}</td>
      )}
      <td onClick={() => bucket_complete(item.b_id)}>{item.b_end_date}</td>
      <td onClick={() => bucket_delete(item.b_id)}>&times;</td>
    </tr>
  );
}

/*
  evnet 핸들러에서 어떤 값을 전달하면서 실행하고자 할때
  다음과 같은 코드는 절대 사용하면 안된다

  <td onClick={bucket_comnplete(item.b_id)}></td>
  위의 코드는 evnet와 관계없이 화면이 rendering 될때 
  내부의 함수가 실행되어 버린다

  evnet 핸들러에 어떤 값을 전달하면서 실행하기 위해서는
  한번더 값을 감사줘야한다.

*/

export default BucketItem;
