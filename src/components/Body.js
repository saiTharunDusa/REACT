import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useBody from "../utils/useBody";

const Body = () => {
  const [search, setSearch] = useState("");

  const resList = useBody();
  const originalList = useBody();

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Oops, Looks like you are offline. Please check your internet connection!
      </h1>
    );

  if (resList === null || resList === undefined) return <Shimmer />;

  return (
    <div className="body">
      <div className="filter-btn">
        <div className="search">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button
            onClick={() => {
              const filteredResList = originalList.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setResData(filteredResList);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const filteredResList = resList.filter(
              (res) => res.info.avgRating > 4.2
            );
            setResData(filteredResList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          onClick={() => {
            setResData(originalList);
            setSearch("");
          }}
        >
          Reset
        </button>
      </div>
      <div className="res-container">
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
