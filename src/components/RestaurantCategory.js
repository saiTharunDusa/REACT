import React from "react";
import ItemsList from "./ItemsList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex, setFlag }) => {
  const handleClick = () => {
    setShowIndex();
    setFlag();
  };
  return (
    <div>
      {/** Header */}
      <div className="w-6/12 mx-auto my-4 bg-orange-100 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {/** Body */}
        {showItems && <ItemsList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
