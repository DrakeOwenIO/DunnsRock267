import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Newsletters from "./components/newsletters/Newsletters";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/newsletters" element={<Newsletters />} />
      </Routes>
    </Router>
  );
};

export default App;
