import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [menuList, setMenuList] = useState(null)
  const url = `https://namastedev.com/api/v1/listRestaurantMenu/${resId}`

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
   const api = await fetch(
      `https://namastedev.com/api/v1/listRestaurantMenu/${resId}`
    
  );
    const data = await api.json();
    // console.log(data?.data?.cards[2]?.card?.card?.info?.name)
    setMenuList(data)
  };
  if(menuList === null) return <h1>not listed</h1>
 const {name}= menuList?.data?.cards[2]?.card?.card?.info
// console.log(menuList?.data?.cards[2]?.card?.card?.info,"menu")
  return (<div>
    <h1>name:{name}</h1>
  </div>);
};

export default RestaurantMenu;
