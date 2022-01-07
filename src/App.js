import BG_header from "./images/bg-header-mobile.svg";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <header className="Header">
        <img src={BG_header} alt="" />
      </header>
      <div className="Main">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
