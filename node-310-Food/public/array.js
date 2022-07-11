const [korea] = "대한민국";
console.log(korea);

const korea11 = { k: "대한민국" };
console.log(korea11.k);
const k = korea11.k;
console.log(k);
const nation = "우리나라";
console.log(nation);

//객체 펼치기 객체의 비 구조화
//객체를 분해하여 KK 변수를 생성하고
//KK변수에 문자열을 담아라
const { KK } = { KK: "우리나라" };
console.log(KK);

// 배열에 펼치기 배열의 비 구조화
//베열의 분해 [1,2,3]가 담긴 배열을 각각 분해하여
//변수 a,b,c를 생성하고 각각 요소를 변수에 담아라
const arr = [1, 2, 3];
const [a, b, c] = arr;
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
console.log(a, b, c);
