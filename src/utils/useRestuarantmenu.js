import { useState,useEffect } from "react";
import { menu_url } from "./constants";

const useRestuarantmenu = (resId) => {
    const [resinfo ,setresinfo ]= useState();
       useEffect(()=>{
        fetchdata();
    },[]);
    const fetchdata = async () =>{
        console.log(resId);
        const data = await fetch(menu_url+resId);
        const json = await data.json();
        setresinfo(json);
    };
    return resinfo;
};
export default useRestuarantmenu;