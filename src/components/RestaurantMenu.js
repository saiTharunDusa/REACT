import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { ID } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await axios.get(MENU_API_URL + ID);
    const json = response.data;
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const {
    itemCards = [],
  } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const {
    name,
    cuisines,
    costForTwoMessage,
  } = resInfo?.cards[2]?.card?.card?.info;

  return (
    <div>
      <h1> {name} </h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h2> Menu </h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {" Rs. "} {item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
