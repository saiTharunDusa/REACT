import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [resList, setResData] = useState(resObj);
    const [originalList, setOriginalList] = useState(resObj);
    return(
        <div className="body">
            <div className="filter-btn">
                <button onClick={()=>{
                    const filteredResList = resList.filter((res) => res.info.avgRating > 4);
                    setResData(filteredResList);
                }}> Top Rated Restaurants </button>
                <button onClick={()=>{
                    setResData(originalList);
                }}>Reset</button>
            </div>
            <div className="res-container">
                {
                    resList.map((resData) => {
                        return(
                            <RestaurantCard key = {resData.info.id} resData = {resData}/>
                        )
                    })
                }
                
            </div>

        </div>
    );
}

export default Body;