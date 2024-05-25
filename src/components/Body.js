import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";

const Body = () => {
    return(
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                {
                    resObj.map((resData) => {
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