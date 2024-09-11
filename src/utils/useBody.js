import { useEffect, useState } from "react";
import { RES_CARD_LIST_URL } from "./constants";
const useBody = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_CARD_LIST_URL);
    const jsonData = await data.json();
    setResInfo(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return resInfo;
};

export default useBody;
