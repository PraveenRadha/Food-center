import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";




const Cart = () =>{
   const cartItems = useSelector((store) => store.cart.items);
   const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());
    }
    return (
     <div className="flex flex-col items-center justify-center min-h-screen bg-black">
     
      <div className="w-1/2 p-4 m-4 font-sans text-white bg-gray-800"> 
           <h1 className="text-2xl font-bold text-center ">cart</h1>
           <div className="m-auto ">
           <div className="flex justify-end w-full mb-4">
           {cartItems.length != 0 && (  
       <button
        className="p-2 text-center text-white bg-black rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
       )}
    </div>
            {cartItems.length == 0 && (
                <h1 className="text-2xl font-bold text-center text-red-600 ">Cart Empty....🥱</h1>
            )}
            <ItemList items={cartItems}/>
           </div>
    </div>
    </div>
    
    );
};
export default Cart;