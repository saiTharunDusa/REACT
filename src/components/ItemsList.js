import React from "react";
import { SWIGGY_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({ items }) => {
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(addItem(item));
  };
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
              <button
                className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-6              rounded-full                      
    shadow-md hover:shadow-lg         
    transition-all duration-300       
    m-2"
                onClick={() => handleClick(item)}
              >
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
