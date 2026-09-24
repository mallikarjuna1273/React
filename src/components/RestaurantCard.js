import React from "react";
import { LOGO_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, id, cuisines, avgRating, cloudinaryImageId, costForTwo } =
    resData.info;
  return (
    <div className="w-[208px] px-4 m-2 border border-black bg-grey-100 hover:bg-amber-200">
      <img
        className="w-auto"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          cloudinaryImageId
        }
        alt="restaurant image"
      ></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>
        <span>{costForTwo}</span>
        <span>{avgRating}</span>
      </h3>
    </div>
  );
};

export default RestaurantCard;
