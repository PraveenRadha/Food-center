import React from "react";
import { linked_in_url, portfolio_url } from "../utils/constants";
class Userclass extends React.Component{

    constructor(props){
        super(props);
        // this.state={
        //     count:0,
        //     count1:1,
        // };
        this.state={
            userinfo:{
            name:"dummy",
            bio:"about",
            avatar_url:"https/image.com",
            }
            
        };
        console.log("child construtuor")
        console.log(props);
       };
       async componentDidMount(){
        const data=await fetch("https://api.github.com/users/PraveenRadha");
        const json=await data.json();
       this.setState({
        userinfo:json,
       });
        console.log(json);
       }
       
       
//        componentDidMount(){
// console.log("mid mount")
//        }
       render(){
        // const {name,location}=this.props;
        const{name,bio, avatar_url}=this.state.userinfo;
        console.log("child render")
    return(
       
        <div className="user-card">
            {/* <h1>count={count}</h1> */}
            {/* {/* <button className ="class=button" onClick={()=>{
                this.setState({
                    count:this.state.count+1,
                    count1:this.state.count1+1,
                })
            }}>count increase</button> */}
            {/* <h1>count1={count1}</h1> */}
            {/* <h2>{name}</h2>
            <h2>{location}</h2>
            <h2>educaton:Engineering</h2> */}
           <div className="flex">
            <img className="rounded-full w-[300px]" src={avatar_url}/>
            <div className="px-20 py-20">
            <h2 className="py-2 font-sans font-bold">UserName : {name}</h2>
            <h2 className="py-2 font-sans font-bold">Bio : {bio}</h2>
            <a href={linked_in_url}  className="py-2 font-sans font-bold text-green-600 ">
             Linkedin
            </a>
            <a  href={portfolio_url} className="px-4 py-2 font-sans font-bold text-green-600">Portfolio</a>
            </div>
          </div>
        </div>
        );
 }
};
export default Userclass;


{/*  HOW USERCLASS FETCH THE API DATA
     MOUNTING CYCLE
     ->render phase
1st step=cosntrutor was called and it take some value also,
2nd step=inside the constructor dummy value was loaded 
       ->commnit phase
3 rd =the data was rendered  microsconds the dummy value available in dom,
4th=componentdidmount() was called and
           UPDATING CYCLE
           ->render phase
 fetch the data, this was occur in updating cycle
5th-next setsate was called and
      ->commit phase
 update the value instead of dummy value,
6 th -it get's rendered and the last
7th-compoenetupdate was called
          UNMOUTING CYCLE
8 th-unmouting was happening..


*/}
