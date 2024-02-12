import { useState } from "react";
import { restrautList } from "../config";
import RestrauntCard from "./RestrauntCard";

const Body = () => {

  const [searchText, setSearchText] = useState("hello");

  return (

    <>
      <div>

        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
           setSearchText(e.target.value);
         }}
        />

      </div>

      <h1>{searchText}</h1>
      <button 
        type="button">
       
       Search
      </button>
      <div className="restaurant-list">

        {restrautList.map((restaurant) => {
          return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />;
        })}

      </div>
    </>
  );

};

export default Body


