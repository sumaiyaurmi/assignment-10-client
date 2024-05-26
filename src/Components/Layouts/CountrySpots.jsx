import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const CountrySpots = () => {
  const spots = useLoaderData();

  return (
    <div className="grid grid-cols-1  md:grid-cols-2 gap-12 my-16 ">
      {spots.map((spot) => (
        <div key={spot._id}>
          <Fade>
            {" "}
            <div className="card mt-4 lg:card-side bg-base-100 shadow-xl transition hover:-translate-y-1 delay-150 duration-300  hover:scale-110 ">
              <div className="space-y-3">
                <figure>
                  <img
                    src={spot.image}
                    className=" md:w-[260px] md:h-[200px]   rounded-xl"
                    alt="Album"
                  />
                </figure>
                <div className="card-actions ">
                  <Link to={`/allspots-details/${spot._id}`}>
                    <button
                      className="btn px-6 hover:text-black hover:bg-orange-500
            border-orange-500 w-full mt-1 "
                    >
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
              <div className="card-body">
                <h2 className="card-title font-bold text-2xl">
                  {spot.tourist_spot_name}
                </h2>
                <div className=" space-y-2  my-4  ">
                  <p className="text-left font-semibold ">
                    Travel Time : <br />
                    <span className="  text-orange-500 border bg-orange-200 rounded-full px-4  font-medium">
                      {" "}
                      {spot.travel_time}
                    </span>
                  </p>
                  <p className="text-left font-semibold ">
                    Seasonality : <br />{" "}
                    <span className="text-orange-500 border bg-orange-200 rounded-full px-4  font-medium">
                      {" "}
                      {spot.seasonality}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-left font-semibold">
                    Cost :
                    <span className="text-yellow-500">
                      {" "}
                      $ {spot.average_cost}
                    </span>
                  </p>
                  <p className="text-left font-semibold">
                    Visitor Per Year :{" "}
                    <span className="text-yellow-500">
                      {spot.total_visitors_per_year}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      ))}
    </div>
  );
};

export default CountrySpots;
