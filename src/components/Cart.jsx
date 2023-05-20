import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearAll } from "../features/cartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Cart</h1>
      {cart?.map((item) => (
        <div key={item.id}>
          <ul>
            <li>{item.name}</li>
          </ul>
        </div>
      ))}
      <Link to="/">
        <button>Go to Home</button>
      </Link>
      <button onClick={() => dispatch(clearAll())}>Clear</button>
    </div>
  );
}
