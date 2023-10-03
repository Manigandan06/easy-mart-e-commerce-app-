import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetFoodsQuery } from "../features/APISlice";
import { addToCart } from "../features/cartSlice";
import { MoonLoader } from "react-spinners";
import Header from "./Header";

export default function Home(props) {
  const { data: dataItem, isLoading, isError } = useGetFoodsQuery();
  const [textInput, setTextInput] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    if (dataItem) {
      let filteredData = dataItem.filter((item) =>
        item.name.toLowerCase().includes(textInput)
      );
      setData(filteredData);
    }
  }, [textInput, dataItem]);

  const dispatch = useDispatch();
  return (
    <div>
      <Header textInputValue={textInput} setTextValue={setTextInput} />
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
      {isError && <h4>Something went Wrong!</h4>}
    </div>
  );
}
