import React from "react";
import { SWIGGY_IMG_URL } from "../utils/constants";
const ItemsList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-orange-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="pt-2">
              <span className="font-semibold">{item.card.info.name}</span>
              {item.card.info.price ? (
                <span>- ₹ {item.card.info.price / 100}</span>
              ) : (
                <span>- ₹ {item.card.info.defaultPrice / 100}</span>
              )}
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 relative">
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-1/4">
              <button className="px-4 py-2 bg-orange-200 shadow-lg m-auto rounded-lg">
                ADD
              </button>
            </div>
            <img
              src={SWIGGY_IMG_URL + item.card.info.imageId}
              className="w-full rounded-lg"
              alt="Food item"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
