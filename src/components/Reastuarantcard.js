import { IMG_URL } from "../utils/constants";

const Reastuarantcard = (props) => {
    const {resData} =props;
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating,sla,parentId}= resData?.info;
   return (
    <div className="">
       <div className="p-4 m-4 w-[250px] rounded-lg bg-gray-800 hover:bg-gray-250 text-white h-[420px]">
           <img
           className="object-cover w-full rounded-lg h-44"
           src= {  IMG_URL +
           cloudinaryImageId 
           }
           />
           <h3 className="py-4 text-lg font-bold">{name}</h3> 
            <h4>{cuisines.join(", ")}</h4>
            <div className="flex items-center justify-between py-2">
           <h4 className="px-1 bg-green-600 rounded-lg"> {avgRating}★</h4>
           <h4> {sla?.deliveryTime} mins</h4>
           <h4>{costForTwo}</h4>
           </div>
       </div> 
       </div>
   );
};

//higher order component
//input=reataurantcar => restuarantcardpromoted
// export const withPromotedLabel = (Reastuarantcard) => {
//     return(props) => {
//         return (
//             <div>
//                 <label>
//                     Promoted
//                 </label>
//                 <Reastuarantcard {...props}/>
//             </div>
//         )
//     }
// };
export default Reastuarantcard;
