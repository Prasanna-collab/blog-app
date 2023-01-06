import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Card from "./Components/Card";
import SingleCard from "./Components/SingleCard";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Router>
          <Routes>
            <Route path="/" element={<Card />} />
            <Route path="/:id" element={<SingleCard />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
