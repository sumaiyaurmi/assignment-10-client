import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";


const CountryCard = ({card}) => {
    const {_id, image,country_name,short_description} =card;

  return (
    <div>
      <Fade >
        
        <Link to={`/country-spots/${country_name}`}>
        <div className="card card-compact mt-10  shadow-xl hover:shadow-2xl">
      <div>
        {/* <div className="hover:text-orange-500 p-3 font-bold text-xl">{tourist_spot_name}</div> */}
        <figure>
        <img
          src={image}
          className="h-[200px] w-[320px]"
          alt="Shoes"
        />
      </figure></div>
      <div className="card-body">
        <p>{short_description}</p>
        <div>
        <p className=" text-left font-bold">Country :  <span className="font-semibold text-yellow-600 ">{country_name}</span></p>
        {/* <p className=" text-left font-bold">Location :  <span className="font-semibold text-yellow-600 ">{location}</span></p> */}
        </div>
        <hr className="my-2"/>
        <div className="card-actions flex  justify-between ">
{/* <p className=" text-left font-bold">Cost : <br /> <span className="font-semibold text-orange-500 ">{average_cost}</span></p> */}
          
        </div>
      </div>
    </div></Link>
    
    </Fade>
    </div>
  );
};

export default CountryCard;