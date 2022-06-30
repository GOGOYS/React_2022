import Sub from "./Sub";

const Main = () => {
  const comp = (
    <div>
      <h1>반갑습니다</h1>
      <p>리액트를 사용</p>
      <p> 3 + 4 = {3 + 4}</p>
      <Sub name="데데" />
    </div>
  );

  return comp;
};

export default Main;
