import { useState } from "react";

const User = ({name,location}) =>{
    const [count]=useState(0);
    const[count1]=useState(1);
    return(
    <div className="user-card">
        <h1>count={count}</h1>
        <h1>count1={count1}</h1>
        <h2>{name}</h2>
        <h2>{location}</h2>
        <h2>educaton:Engineering</h2>
    </div>
    );
};

export default User;