import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Newsletters from "./components/newsletters/Newsletters";
import Officers from "./components/officers/Officers";
import Pastmasters from "./components/pastmasters/Pastmasters";
import Photogallery from "./components/photogallery/Photogallery";
import Contact from "./components/contact/Contact";
import Readings from "./components/readings/Readings";
import Events from "./components/events/Events";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/newsletters" element={<Newsletters />} />
        <Route path="/officers" element={<Officers />} />
        <Route path="/pastmasters" element={<Pastmasters />} />
        <Route path="/photogallery" element={<Photogallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/readings" element={<Readings />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
};

export default App;
