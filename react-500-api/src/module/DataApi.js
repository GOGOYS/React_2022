/*
    fetch 함수를 사용하여 data.go.kr의 API 연결하기
*/
const apiURL = "/get/1360000/WthrWrnInfoService/getWthrWrnList";
const apiServiceKey =
  "kktEB5z3GUau5G1ovyEa2j%2Ft%2FiLIf4nStttpwTpKNe7WYq5eIhi5W4rjk5BK3TkCQ%2BmO%2B86SI8QLYnM6Vsj82Q%3D%3D";
const fetchData = async () => {
  const serviceURL = `${apiURL}?serviceKey=${apiServiceKey}&dataType=JSON&pageNo=1&numOfRows=100`;
  console.log(serviceURL);
  const response = await fetch(serviceURL);
  const json = await response.json();
  return json;
};

export { fetchData };
