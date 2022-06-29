const json_array = [];

for (let i = 0; i < 10; i++) {
  const min = 10;
  const max = 100;
  let rnd = Math.floor(Math.random() * (max - min) + min);
  json_array.push(rnd);
  console.log(rnd);
}

console.log("========");
console.log(json_array);

/*
JS에서 기존의 배열을 새로운 배열로 복제를 하는 경우가 자주있다.
*/

const new_array1 = json_array.slice();
const new_array2 = Array.from(json_array);
const new_array3 = [];
for (let i = 0; i < json_array.length; i++) {
  /*
        자바와 달리 스크립트는 배열의 범위를 지정하지 않아도
        제한 없이 요소를 추가할때 배열의 범위를 넘어가도
        자동으로 추가된다.
    */
  new_array3[i] = json_array[i];
}
console.log(new_array3);

const new_array4 = json_array.concat();
console.log(new_array4);

const new_array5 = json_array.map((item) => {
  return item;
});

// spread (확장, 펼치기)
const new_array6 = [...json_array];
const new_array7 = [...json_array, 3, 4, 5, 6, 7, 8];
console.log(new_array7);

const book = {
  title: "자바만세",
  author: "홍길동",
  comp: "영진출판사",
  price: 25000,
};

/*
    state json 객체에 추가를 해버리면 rendering이 폭주해서
    json 객체 자체에 문제가 생긴다.
    그래서 기존의 json을 다른 json 객체에
    복제하여 사용하는 것을 권장

    book JSON 객체에 원래 없던 lang이라는 속성에 값을
    저장하는 코드를 만나면 lang 속성을 추가하면서 book JSON
    객체가 변경되어 버린다.
    객체의 속성이 추가, 변경되는 것은 어떤 문제를 일으킬 수 있는
    준비가 되었다 라고 보아도 된다.
*/
book.lang = "korea";
console.log(book);
/*
    JS에서 JSON이나 배열 데이터를 다를때는
    값을 변경하거나 할때 기존 JSON 배열을 변경하지 말고
    변경된 내용으로 새로운 JSON, 배열을 생성하여 데이터를 복제하고
    생성한 JSON, 배열의 내용을 변경하여 사용하도록 권장한다.
*/

//기존의 book JSON 객체를 spread 하여 book1에 복제하기
//그냥 복제를 하여 배열을 사용하게 되면 주소를 공유하기 때문에
//확장을 하여 사용해야한다.
const book1 = { ...book };
const book2 = {
  title: book.title,
  author: book.author,
  comp: book.comp,
  price: book.price,
};

const book3 = book;
console.log("book", book);
console.log("book3", book3);

book3.title = "오라클";
console.log("book", book);
console.log("book3", book3);

/*
    원래의 book JSON을 펼쳐서 복제하면서
    title만 MySQL 변경하여 새로운 JSON 객체 생성하기
*/
const book4 = { ...book, title: "MYsql" };
console.log("book", book);
console.log("book4", book4);

const book5 = { ...book, discount: 10000 };
console.log("book", book);
console.log("book5", book5);

// book JSON을 spread 하면서 각각의 변수를 선언하여 생성
const { title, author, price, comp } = book;

const books = ["자바", "오라클", "MySQL"];
const [자바, 오라클, MySQL] = books;
/*
    const 자바 = books[0]
    const 오라클 = books[1]
    const MySQL = books[2]
*/
