import { Component } from "react";
// import User from "./User";
import Userclass from "./Userclass";
class About extends Component{
    constructor(props){
        super(props);
        console.log("parenet construtor");
    }
    render(){
        console.log("parent render")
        return(
            <div className="w-full h-screen px-4 text-white bg-black"> 
                <h1 className="py-6 font-sans font-bold px-28">About Me</h1>
                <h1 className="flex rounded-lg">
                {/* <User name={"praveen(fn)"} location={"cheanni fn"}/> */}
                <div> <Userclass name={"praveen(class)"}
                location={"cheanni (class compoenets)"} />
                 </div>
                
                {/* <Userclass  name={"praveen second (class)"} location={"cheanni second (class compoenets)"} /> */}
                </h1>
               
            </div>
        );
    };
};

export default About;