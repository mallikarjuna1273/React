import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = () => {
  const [resList, setResList] = useState([]);
  const [filterResList, setFilterResList] = useState([])
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37082&lng=78.553042&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await api.json();
    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilterResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
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
      <div className="restaurant-list">
        {filterResList.map((res) => {
          return <RestaurantCard key={res.info.id} resData={res} />;
        })}
      </div>
    </>
  );
};

export default RestaurantList;
