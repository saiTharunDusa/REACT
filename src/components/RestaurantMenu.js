import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { ID } = useParams();

  const resInfo = useRestaurantMenu(ID);

  const [showIndex, setShowIndex] = useState(-1);

  const [flag, setFlag] = useState(true);

  const [prevIndex, setPrevIndex] = useState(-1);

  if (resInfo === null) return <Shimmer />;

  const {
    itemCards = [],
  } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const {
    name,
    cuisines,
    costForTwoMessage,
  } = resInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/** category accordian */}
      {categories.map((cat, index) => (
        <RestaurantCategory
          key={index}
          data={cat?.card?.card}
          showItems={index === showIndex ? true : false}
          setFlag={() => {
            flag ? setFlag(false) : setFlag(true);
          }}
          setShowIndex={() => {
            flag ? setShowIndex(index) : setShowIndex(-1);
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
