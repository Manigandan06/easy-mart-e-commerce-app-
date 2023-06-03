import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetFoodsQuery } from "../features/APISlice";
import { addToCart } from "../features/cartSlice";
import { MoonLoader } from "react-spinners";

export default function Home() {
  const { data, isLoading, error } = useGetFoodsQuery();

  const dispatch = useDispatch();
  return (
    <div>
      {/* <div className="intro">
        <h3>
          Welcome to our online grocery shop, where convenience meets quality!
          Browse through our extensive selection of fresh produce, pantry
          essentials, and household items. With just a few clicks, you can have
          your groceries delivered right to your doorstep. Enjoy a hassle-free
          shopping experience with our user-friendly interface and secure
          payment options. Start shopping today and let us bring the groceries
          to you!
        </h3>
      </div> */}
      {isLoading && (
        <MoonLoader
          color="rgba(29, 237, 11, 1)"
          cssOverride={{}}
          size={80}
          speedMultiplier={1}
          className="loader"
        />
      )}
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
              <button
                onClick={() =>
                  dispatch(addToCart({ name: item.name, id: item.id }))
                }
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      )}
      {error && <h4>Something went Wrong!</h4>}
    </div>
  );
}
