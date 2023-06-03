import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const cart = useSelector((state) => state.cart.value);

  return (
    <div className="App">
      <div className="header">
        <h1>
          <Link to="/" className="title">
            <bold>EASY MART</bold>
          </Link>
        </h1>

        {/* {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error occurred while fetching data</div>
        ) : (
          data.map((item) => <div key={item.id}>{item.name}</div>)
        )} */}
        <Link to="/cart" className="nav">
          <span className="cart-in">{cart?.length}</span>
          <TiShoppingCart />
          Cart
        </Link>
      </div>
    </div>
  );
}
