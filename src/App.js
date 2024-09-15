import "./App.css";
import TopBar from "./components/TopBar";
import Nav from "./components/Nav";
import Meetings from "./components/Meetings";

function App() {
  return (
    <div className="App">
      <div classname="container">
        <div className="topbar-component">
          <TopBar />
        </div>
        <div classname="nav-component">
          <Nav />
        </div>
        <div className="meetings-component">
          <Meetings />
        </div>
      </div>
    </div>
  );
}

export default App;
