import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Item from "./components/Item";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/item/Футболки" element={<Item category="Футболки"/>} exact />
        <Route path="/item/Штаны" element={<Item category="Штаны"/>} exact />
        <Route path="/item/Шорты" element={<Item category="Шорты"/>} exact />
        <Route path="/item/Куртки" element={<Item category="Куртки"/>} exact />
        <Route path="/item/Остальное" element={<Item category="Остальное"/>} exact />
      </Routes>
    </div>
  );
}

export default App;
