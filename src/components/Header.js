import { useState ,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link }from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    
    const[btnnameReact , setbtnnameReact ]=useState("Login");
    
    const onlineStatus =useOnlineStatus();
    
    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);
    
//subcribing the store using selector.
    const cartItems = useSelector((store) => store.cart.items);
    
    return(
        <div className="flex justify-between text-white bg-black shadow-sm">
            <div className="logo-contianer">
                <img className="w-[150px] h-[100px]"
                src={LOGO_URL}/>
            </div>
            <div className="">
                <ul className="flex items-center p-4 m-4">
                    <li className="px-4">
                        Internet Status:{onlineStatus ? "✅": "🚫"}</li>
                   
                    <li className="px-2 py-1 mx-1 rounded-lg py hover:bg-green-500 hover:text-black">
                    <Link to="/">Home</Link>
                    </li>
                    
                    <li className="px-2 py-1 mx-1 rounded-lg py hover:bg-green-500 hover:text-black">
                        <Link to="/About">AboutUs</Link></li>
                        
                    <li className="px-2 py-1 mx-1 rounded-lg py hover:bg-green-500 hover:text-black">
                         <Link to="/Contact">ContactUs</Link>
                    </li>
                    
                    <li className="px-2 py-1 mx-1 rounded-lg py hover:bg-green-500 hover:text-black">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    
                    <li className="px-2 mx-2 font-bold rounded-lg hover:bg-green-500 hover:text-black">
                        
                       <Link to="/cart" >Cart-<span className="text-orange-400">{cartItems.length}</span></Link>
                    </li>
                        
                    <button className="px-2 mx-2 rounded-lg hover:bg-green-500 hover:text-black"
                    onClick={ () =>{
                       btnnameReact == "Login" 
                       ? setbtnnameReact("Logout")
                       :setbtnnameReact("Login");
                    }}
                    >
                     {btnnameReact}   
                    </button>
                    <li className="px-2 mx-2 font-bold rounded-lg hover:bg-green-200 hover:text-black">{loggedInUser}</li>
                </ul>
            </div>
        </div>
  );
  };
export default Header;
