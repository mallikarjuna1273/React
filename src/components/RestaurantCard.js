import React from "react";
import { LOGO_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, id, cuisines, avgRating, cloudinaryImageId, costForTwo } =
    resData.info;
  return (
    <div className="res-card">
      <img
        className="res-img"
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
