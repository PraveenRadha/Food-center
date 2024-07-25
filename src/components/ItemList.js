import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({items}) =>{

const dispatch = useDispatch();

const handleAddItem = (item) => {
    dispatch(addItem(item));
}; 
    
    //console.log(items);
    return (

       <div className="p-4 mt-0"> 
        {items.map((item) => (
        <div key={item.card.info.id}
             className="flex justify-between p-2 font-sans text-left border-gray-300 border-gray">
                
            <div className="w-9/12 ">
                <div className="p-2">
                    <span className="font-bold">{item.card.info.name}</span>
                    <span > - ₹ {item.card.info.price ?
                    item.card.info.price /100
                    :item.card.info.defaultPrice /100
                 }</span>
                </div>
                <p className="p-2 text-[14px]">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4 ">
                 <div className="">
                <button className="p-1 mx-10 text-white bg-black rounded-lg shadow-lg hover:bg-green-500"
                 onClick={() => handleAddItem(item)}
                 >
                    Add +
                </button>
                </div>
                <img src={IMG_URL + item.card.info.imageId} 
                className="w-full h-24 rounded-md"/>
            </div>
        </div>
                
        ))}
    </div>
   
    );
};
export default ItemList;