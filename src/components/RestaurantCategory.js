import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data , showItems ,setShowIndex}) => {
    //const [showItems , setShowItems] = useState(false);
    
    const handleClick = () => {
        //setShowItems(!showItems);
        setShowIndex( );
    };
    return ( 
    <div className="bg-black">
        {/* Header
        Accordin item */}
        <div className="w-6/12 p-4 mx-auto my-4 text-white bg-gray-800 shadow-lg">
            
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="text-lg font-bold">
            {data?.title}({data?.itemCards?.length})
            </span>
        <span>⬇</span>
        </div>
        
        {showItems && <ItemList items={data.itemCards} />}
        </div>
        
    </div>
    );
};
export default RestaurantCategory;