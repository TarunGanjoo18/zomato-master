import React from "react";

// Components
import FoodItem from "./FoodItem";

// redux action

 
function FoodList(props) {
  return (
    <>
      <div>
        <h2 className="top-0 sticky bg-white w-full px-2 py-1 z-10 text-xl font-semibold">
          {props.name}
        </h2>
        <div className="flex flex-col gap-3">
          {props.items.map((item) => (
            <FoodItem key={item} _id={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default FoodList;
