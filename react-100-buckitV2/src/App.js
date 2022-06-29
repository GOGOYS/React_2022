import backgroundImage from "./images/ERD2.jpg";
import "./App.css";
import "./w3css.css";
import BucketMain from "./component/BucketMain";

/*
  css style을 js 코드로 구현하기
*/
const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundRepeat: `no-repeat`,
  backgroundAttachment: `fixed`,
  backgroundSize: `100vw, 100vh`,
};
function App() {
  return (
    <div className="App">
      <header className="App-header" style={backgroundStyle}></header>
      <section className="w3-container w3-margin">
        <BucketMain />
      </section>
    </div>
  );
}

export default App;
