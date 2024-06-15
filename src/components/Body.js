import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setResData] = useState([]);
  const [originalList, setOriginalList] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setResData(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setOriginalList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (resList.length === 0) return <Shimmer />;

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
