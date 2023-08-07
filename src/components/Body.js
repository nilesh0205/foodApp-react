import { restaurantList } from "../containts";
import RestrauntCard from "./RestrauntCard";
const Body=()=>{
    return(
        <div class="restraunt-list">
      { restaurantList.map((restaurant)=>{
        return <RestrauntCard {...restaurant.info} key={restaurant.info.id} />
      })

      }
      
      </div>
    );
};

export default  Body;