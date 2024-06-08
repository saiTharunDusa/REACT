import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [resList, setResData] = useState();
    const [originalList, setOriginalList] = useState();
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=12.9715987&lng=77.5945627");
        const jsonData = await data.json();
        setResData(jsonData.data.success.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setOriginalList(jsonData.data.success.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
        console.log(jsonData.data.success.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setLoading(false);
    };

    if (loading)
        return <Shimmer />;

    return (
        <div className="body">
            <div className="filter-btn">
                <div className="search">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}></input>
                    <button onClick={() => {
                        const filteredResList = originalList.filter((res) => res.info.name.toLowerCase().includes(search.toLowerCase()));
                        setResData(filteredResList);
                    }}>Search</button>
                </div>
                <button onClick={() => {
                    const filteredResList = resList.filter((res) => res.info.avgRating > 4);
                    setResData(filteredResList);
                }}> Top Rated Restaurants </button>
                <button onClick={() => {
                    setResData(originalList);
                    setSearch("");
                }}>Reset</button>
            </div>
            <div className="res-container">
                    {resList.map((resData) => (
                        <RestaurantCard key={resData.info.id} resData={resData} />
                    ))} 
                
            </div>
        </div>
    );
};

export default Body;
