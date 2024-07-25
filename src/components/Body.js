//import resList from "../utils/Mockdata";
import Reastuarantcard from "./Reastuarantcard";
import { useState,useEffect} from "react";
import Shimmers from './Shimmers';
import { Link } from "react-router-dom";
import { swiggy_api } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
//this arraydestructure the resList after that setoListOFresturant contain the filtered list and last react find the differene b/w listof resturant and setlist of 
//resturants  object using react and show in ui.
    let [listOfRestaurants,setListOfRestaurant] = useState([]);
    const [filterdRestuarant,setFilterdRestuarant]= useState([]);
    const [searchtext,setsearchtext] = useState("");

    // const Restuarantcardpromoted = withPromotedLabel(Reastuarantcard);
  // console.log("Body rendered",listOfRestaurants);
    useEffect(() => {
      fetchData();
      //console.log("will working...");
    },[]);
    
    const fetchData = async () => {
    const data= await fetch(swiggy_api);
     const json = await data.json();

    console.log(json);
   
    setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterdRestuarant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    const onlineStatus = useOnlineStatus();
    if(onlineStatus == false)
    return (
    <h1>
      look's like your're in Offline!! please check you Internet Connection !!.
      </h1>
    );

   
 // Assuming this is the beginning of your component or relevant function
if (!listOfRestaurants || listOfRestaurants.length === 0) {
  return <Shimmers />;
}

  
return( 
         <div className="w-full pb-10 bg-black">
         <div className="flex justify-center">

          <div className="px-3 mx-3 search">

          <input type="text" className="py-1.5 border border-black border-solid rounded-lg px-20" 
          value = {searchtext}
          onChange={(e) => {
            setsearchtext(e.target.value);
          }}
          />

          <button className="px-2 py-1.5 m-2 bg-green-100 rounded-lg "

          onClick={ () => {
          //console.log(searchtext); 

        const filterdRestuarant = listOfRestaurants.filter((res) => 
          res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
          setFilterdRestuarant(filterdRestuarant);
          }}
          >search
           </button>
          </div>
         <div className="flex items-center search ai">
         <button
          className="py-1.5 bg-green-100 rounded-lg px-2"
          onClick={ () => {
            listOfRestaurants = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4.3
            );
         setFilterdRestuarant(listOfRestaurants);
         } } >
         Top Rated Restaurants
         </button>
         </div>
         </div>

         <div className="flex flex-wrap w-full ml-12">
            {
             filterdRestuarant.map((restaurant) =>(
             <Link 
             key = {restaurant.info.id}
             to={"/restuarants/"+restaurant.info.id}>
               <Reastuarantcard  resData={restaurant}/>
              </Link>
              ))
             }
         </div>
     </div>
    );
  };
 
 export default Body;
//  https://github.com/praveenRadha/react-main.git