import { useContext, createContext, useState, useEffect } from "react";

// ScoreContext 라는 store 생성
const ScoreContext = createContext();

//store에서 state 변수와 함수를 가져가기 쉽도록
//도와줄 함수를 선언하기
const useScoreContext = () => {
  return useContext(ScoreContext);
};

//state 변수와 함수를 공유하기 위한 store 역할
const ScoreContextProvider = ({ children }) => {
  //input에서 text를 입력하면 text를 저장할 state 변수
  const [student, setStudent] = useState({
    st_num: "",
    st_name: "",
    st_dept: "",
    st_tel: "",
    st_addr: "",
  });

  //API 서버에서 학생 리스트를 가져와서 저장할 state 배열
  const [studentList, setStudentList] = useState([]);

  const [stdIsUpdate, setStdUpdate] = useState(false);

  const fetchStudent = async () => {
    const response = await fetch("/api/student");
    const stdList = await response.json();
    setStudentList(stdList);
  };

  const deleteStudent = async (st_num) => {
    const response = await fetch(
      `http://localhost:8080/score/api/student/${st_num}/delete`
    );
    const result = await response.text();

    //서버에서 삭제가 되었다는 Ok 메시지를 받으면
    if (result === "OK") {
      alert("삭제 완료");
    } else {
      alert("삭제시 문제 발생");
    }

    //다시 서버에 데이터를 요청하여 다시 rendering
    fetchStudent();
  };

  const stNumCheck = async (st_num) => {
    const response = await fetch(`/api/student/${st_num}/check`);
    const result = await response.text();
    if (result === "OK") {
      alert("사용가능한 학번 입니다");
    } else {
      alert("이미 등록된 학번 입니다");
    }
  };

  const insertStudent = async () => {
    let url = "/api/student/insert";
    if (stdIsUpdate) {
      url = "/api/student/update";
    }
    const fetchData = {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(student),
    };

    const response = await fetch(url, fetchData);
    const result = await response.text();
    if (result === "OK") {
      alert("데이터가 정상적으로 추가되었습니다");
      fetchStudent();
    } else {
      alert("데이터 추가에 실패했습니다.");
    }
  };

  const getStudent = async (st_num) => {
    const response = await fetch(`/api/student/${st_num}`);
    const stJson = await response.json();
    setStudent(stJson);
    setStdUpdate(true);
  };

  //실행할때 자동으로 데이터를 가져오게끔
  useEffect(() => {
    fetchStudent();
  }, []);

  //store에 state 변수와 함수를 보관하기 위하여 보관용 창고 생성
  const props = {
    studentList,
    setStudentList,
    deleteStudent,
    student,
    setStudent,
    insertStudent,
    stNumCheck,
    getStudent,
  };

  return (
    <ScoreContext.Provider value={props}>{children}</ScoreContext.Provider>
  );
};

export { ScoreContextProvider, useScoreContext };
