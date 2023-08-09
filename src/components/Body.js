import { useState , useEffect } from "react";
import { restaurantList } from "../containts";
import RestrauntCard from "./RestrauntCard";

function filterData(searchText,restaurants){
const filterData=restaurants.filter((restaurants)=>
  restaurants.info.name.includes(searchText)
  );
  return filterData;
}

const Body=()=>{
 
  const [restaurants,setRestaurants]=useState(restaurantList);  
 
  const [searchText, setSearchText]=useState();

  useEffect(()=>{
    console.log("call this when dependency is ");
  },[])

  ;
    return(
      <>
      <div className="search-container" >
       <input 
       type="Text"  
       placeholder="Search" 
       className="search-input"
       value={searchText} 
       onChange={(e)=>{
        setSearchText(e.target.value);
       }}
       />
      
       <button
        className="Search-btn"
        onClick={()=>{
          //need to filter the data
         const data=filterData(searchText,restaurants);
         //update the state
         setRestaurants(data);

        }}
       >Search</button>
      </div>
        <div class="restraunt-list">
      { restaurants.map((restaurant)=>{
        return <RestrauntCard {...restaurant.info} key={restaurant.info.id} />
      })

      }
      
      </div>
      </>
    );
};

export default  Body;