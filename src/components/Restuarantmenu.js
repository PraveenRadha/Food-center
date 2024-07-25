// import { useState,useEffect } from "react";
import Shimmers from "./Shimmers";
//import { menu_url } from "../utils/constants";
import React, { useState } from "react";
import { useParams } from "react-router";
import useRestuarantmenu from "../utils/useRestuarantmenu";
import RestaurantCategory from "./RestaurantCategory";

const Restuarantmenu = () =>{
    //console.log("menu was right");
// const [resinfo,setresinfo] = useState(null);
 const {resId}=useParams();
 //console.log(resId);
const resinfo = useRestuarantmenu(resId);
// useEffect(() =>{
// fetchmenu();
// },[]);
// //wihtout dependecy array each and every render my useeffect was called..

// const fetchmenu = async () =>{
//     const data = await fetch(menu_url +resId); 
//         const json = await data.json();
//         console.log(json);
//         setresinfo(json);
//     }
const [showIndex , setShowIndex] = useState(0);

    if (resinfo == null) 
    return <Shimmers />;
   
    const{ locality,totalRatings,type,city,areaName,avgRating, cuisines, costForTwo,name} =resinfo?.data?.cards[2]?.card?.card?.info;
    
//    const {itemCards} = resinfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   
   const categories = resinfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
   );
   //console.log(categories);
    return(
        <div className="text-center">
             <h1 className="my-10 text-2xl font-bold">{name}</h1>
             <p className="font-bold">{cuisines.join(", ")} - Rs.{costForTwo/100}</p>
             
             {categories.map( (category , index) =>
             //controlled component 
              (<RestaurantCategory key = {category?.card?.card.title}
              data={category?.card?.card}
              showItems={index == showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
              
              />))}
             {/* <h2>Menu</h2> */}
             {/* <ul>
                    {itemCards.map((item) => ( <li key={ item?.card?.info?.id }>{ item?.card?.info?.name } - Rs.{item?.card?.info?.price / 100 
           || item?.card?.info?.defaultPrice / 100 }
                    </li>
                    ))}
             </ul> */}
        </div>
    );
};

export default Restuarantmenu;