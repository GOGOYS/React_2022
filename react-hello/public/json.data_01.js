const student = {
  st_num: 1,
  st_name: "홍길동",
  st_grade: 3,
  st_dept: "컴공과",
};

console.table(student);

console.log(student);

console.log(student.st_name);
console.log(student.st_num);

// JS에서 json 객체 데이터는 자체를 const로 선언을 하여도
// 각 속성(요소)의 데이터는 변경 할 수 있다.
student.st_name = "이몽룡";
console.log(student.st_name);

/*  json 객체를 일반 변수로 변환하는 방법
    JSON 객체 분해, 펼치기, Spread
    student 객체에 저장된 값 중에서 st_name, st_dept 속성에 저장된
    값만 추출하고, st_name, st_dept 단일변수를 선언하여 저장해 달라
*/
const { st_name, st_dept } = student;
console.log(st_name, st_dept);
