import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Cart from "./components/Cart";
import Details from "./components/Details";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
