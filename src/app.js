import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList";
// import '../src/index.css'

const App = () => {
  return (
    <>
      <Header />
      <RestaurantList/>
    </>
  );
};

export default App;
