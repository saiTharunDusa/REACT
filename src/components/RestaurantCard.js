import { SWIGGY_IMG_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  if (!resData || !resData.info) {
    return null; // or return a placeholder component
  }
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData.info;
  const { deliveryTime } = sla.deliveryTime;
  return (
    <div className="p-4 m-4 w-[260px] h-[425px] bg-orange-100 rounded-lg flex flex-col justify-between hover:bg-orange-200">
      <div className="h-[200px]">
        <img
          className="rounded-lg object-cover w-full h-full"
          src={SWIGGY_IMG_URL + cloudinaryImageId}
        />
      </div>

      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="font-semibold">{cuisines.join(", ")}</h4>
      <h4 className="font-semibold">{avgRating} rating</h4>
      <h4 className="font-semibold">{deliveryTime} minutes Del Time</h4>
    </div>
  );
};

export default RestaurantCard;
