import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TouristDetails = () => {

     const detailsCard=useLoaderData()

    return (
        <div className="card mb-10 mt-4 lg:card-side bg-base-100 shadow-xl  ">
        <div className="space-y-3 lg:w-1/2">
          <figure>
            <img
              src={detailsCard.image}
              className="  rounded-xl"
              alt="Album"
            />
          </figure>
         
        </div>
        <div className="card-body">
     <h2 className="card-title font-bold text-2xl">{detailsCard.tourist_spot_name}</h2>
     <div className='text-left '>
     {detailsCard.description}
     </div>
     <div className=" space-y-2  my-4  ">
       <p className="text-left font-semibold m">
       Country : 
         <span className="  
           font-medium">
            {" "}
             {detailsCard.country_name}
         </span>
       </p>
       <p className="text-left font-semibold ">
        Location : {" "}
         <span className="  font-medium">
           {" "}
           {detailsCard.location}
         </span>
       </p>
     </div>
     <div className=" space-y-2  my-4  ">
       <p className="text-left font-semibold m">
         Travel Time : 
         <span className="  text-orange-500 border bg-orange-200 rounded-full px-4  font-medium">
           {" "}
           {detailsCard.travel_time}
         </span>
       </p>
       <p className="text-left font-semibold ">
         Seasonality : {" "}
         <span className="text-orange-500 border bg-orange-200 rounded-full px-4  font-medium">
           {" "}
           {detailsCard.seasonality}
         </span>
       </p>
     </div>
     <div>
       <p className="text-left font-semibold">
         Cost :<span className="text-green-600 border bg-green-300 rounded-full px-4  font-medium">   {detailsCard.average_cost}</span>
       </p>
       <p className="text-left font-semibold">
         Visitor Per Year :{" "}
         <span className="text-green-600 border bg-green-300 rounded-full px-4  font-medium">{detailsCard.total_visitors_per_year}</span>
       </p>
     </div>
   </div>
   <div>
   </div>
      </div>
    );
};

export default TouristDetails;