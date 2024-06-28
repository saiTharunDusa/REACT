import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { ID } = useParams();

  const resInfo = useRestaurantMenu(ID);

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
    <div className="bg-orange-100 m-6 rounded-lg">
      <div className="mx-[490px]">
        <h1 className="font-bold text-2xl"> {name} </h1>
        <p className="font-semibold text-xl ">
          {cuisines.join(",")} - {costForTwoMessage}
        </p>
        <h2 className="font-semibold text-xl mt-10"> Menu </h2>
      </div>

      <ul>
        {itemCards.map((item) => (
          <li className="mx-[490px] my-1" key={item?.card?.info?.id}>
            🎯
            {item?.card?.info?.name} - {" Rs. "}{" "}
            {(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
