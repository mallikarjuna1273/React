import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const RestaurantList = () => {
  const [resList, setResList] = useState([]);
  const [filterResList, setFilterResList] = useState([])
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(
      `https://namastedev.com/api/v1/listRestaurants`
,
    );
    const json = await api.json();
    console.log(json)
    setResList(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilterResList(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  const handleTopRated=()=>{
    const topRatedList = resList.filter((res)=>res.info.avgRating > 4.2)
    setFilterResList(topRatedList)
  }

  const handleSearch=()=>{
    const filterList = resList.filter((res, index)=>{
        return res.info.name.toLowerCase().includes(searchText.toLowerCase())
    })
    setFilterResList(filterList)
  }

  if (resList.length === 0) {
    return <h1>no data found</h1>;
  }

  return (
    <>
      <div className="section-logics">
        <div className="search-container">
          <input type="text" name="searchText" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
          <button className="search-btn" onClick={handleSearch}>Search</button>
        </div>
        <div className="top-rated">
            <button onClick={handleTopRated}>Top Rated</button>
        </div>
      </div>
      <div className="flex flex-wrap px-4 mx-2 ">
        {filterResList.map((res) => {
          return <Link key={res.info.id} to={"/res-menu/" + res.info.id}> <RestaurantCard  resData={res} /> </Link>;
        })}
      </div>
    </>
  );
};

export default RestaurantList;
