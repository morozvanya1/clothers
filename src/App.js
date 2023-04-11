import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Item from "./Item";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/item" element={<Item/>} exact />
      </Routes>
    </div>
  );
}

export default App;
