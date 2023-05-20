import React from "react";
import { useParams } from "react-router-dom";
import { useGetFoodByIDQuery } from "../features/APISlice";

export default function Details() {
  const { id } = useParams();
  const { data } = useGetFoodByIDQuery(id);

  return (
    <div>
      <h1>Details</h1>
      {data && (
        <div>
          <img src={data.img} width="200" height="200" alt="error" />
          <h3>Name: {data.name}</h3>
          <h3>Type: {data.type}</h3>
          <h3>Nutrients: {data.nutrients.join(", ")}</h3>
          <h3>Calories: {data.calories}</h3>
        </div>
      )}
    </div>
  );
}
