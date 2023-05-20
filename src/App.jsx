import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Cart from "./components/Cart";
import Details from "./components/Details";
import { TiShoppingCart } from "react-icons/ti";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>
          <Link to="/" className="title">
            <bold>EASY MART</bold>
          </Link>
        </h1>
        <input
          type="text"
          name="search"
          id="search-item"
          placeholder="search..."
        />
        <Link to="/cart" className="nav">
          <TiShoppingCart />
          Cart
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
