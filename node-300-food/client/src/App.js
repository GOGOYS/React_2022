import logo from "./logo.svg";
import "./App.css";
import FoodInput from "./coms/foodInput.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <FoodInput />
    </div>
  );
}

export default App;
