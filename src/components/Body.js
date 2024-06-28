import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useBody from "../utils/useBody";
import { RES_CARD_LIST_URL } from "../utils/constants";

const Body = () => {
  const [search, setSearch] = useState("");

  const [resList, setResData] = useState(null);
  const originalList = useBody();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_CARD_LIST_URL);
    const jsonData = await data.json();
    setResData(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Oops, Looks like you are offline. Please check your internet connection!
      </h1>
    );

  if (resList === null || resList === undefined) return <Shimmer />;

  return (
    <div className="bg-orange-50">
      <div className="filter-btn">
        <div className="m-4 p-4">
          <input
            className="border border-solid border-black rounded-lg"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button
            className="px-4 py-2 bg-orange-100 m-4 rounded-lg font-semibold"
            onClick={() => {
              const filteredResList = originalList.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setResData(filteredResList);
            }}
          >
            Search
          </button>
          <button
            className="px-4 py-2  bg-orange-100 m-4 rounded-lg font-semibold"
            onClick={() => {
              const filteredResList = originalList.filter(
                (res) => res.info.avgRating > 4.4
              );
              setResData(filteredResList);
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className="px-4 py-2  bg-orange-100 m-4 rounded-lg font-semibold"
            onClick={() => {
              setResData(originalList);
              setSearch("");
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {resList.map((resData) => (
          <Link
            to={"/restaurant/" + resData.info.id}
            key={resData.info.id}
            style={{ textDecoration: "none" }}
          >
            <RestaurantCard resData={resData} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
