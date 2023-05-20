import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetFoodsQuery } from "../features/APISlice";
import { addToCart } from "../features/cartSlice";

export default function Home() {
  const { data } = useGetFoodsQuery();

  const dispatch = useDispatch();
  return (
    <div>
      <div className="intro">
        <h3>
          Welcome to our online grocery shop, where convenience meets quality!
          Browse through our extensive selection of fresh produce, pantry
          essentials, and household items. With just a few clicks, you can have
          your groceries delivered right to your doorstep. Enjoy a hassle-free
          shopping experience with our user-friendly interface and secure
          payment options. Start shopping today and let us bring the groceries
          to you!
        </h3>
      </div>

      {data && (
        <div className="items">
          {data.map((item) => (
            <div key={item.id} className="border">
              <h1>{item.id}</h1>
              <img src={item.img} width="150" height="150" alt="" />
              <h1>{item.name}</h1>
              <Link to={`/${item.id}`}>
                <button>Show More</button>
              </Link>
              <button onClick={() => dispatch(addToCart({ name: item.name }))}>
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
