
const AllSpotsCard = ({ spot }) => {
  const {
    _id,
    image,
    tourist_spot_name,
    average_cost,
    total_visitors_per_year,
    travel_time,
    seasonality,
  } = spot;
  return (
    <div className="card mt-4 lg:card-side bg-base-100 shadow-xl transition hover:-translate-y-1 delay-150 duration-300  hover:scale-110 ">
      <div className="space-y-3">
        <figure>
          <img
            src={image}
            className="w-[260px] h-[200px]   rounded-xl"
            alt="Album"
          />
        </figure>
        <div className="card-actions ">
          <button
            className="btn px-6 hover:text-black hover:bg-orange-500
               border-orange-500 w-full mt-1 "
          >
            View Details
          </button>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title font-bold text-2xl">{tourist_spot_name}</h2>
        <div className=" space-y-2  my-4  ">
          <p className="text-left font-semibold ">
            Travel Time : <br />
            <span className="  text-orange-500 border bg-orange-200 rounded-full px-4  font-medium">
              {" "}
              {travel_time}
            </span>
          </p>
          <p className="text-left font-semibold ">
            Seasonality : <br />{" "}
            <span className="text-orange-500 border bg-orange-200 rounded-full px-4  font-medium">
              {" "}
              {seasonality}
            </span>
          </p>
        </div>
        <div>
          <p className="text-left font-semibold">
            Cost : <span className="text-yellow-500"> {average_cost}</span>
          </p>
          <p className="text-left font-semibold">
            Visitor Per Year :{" "}
            <span className="text-yellow-500">{total_visitors_per_year}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllSpotsCard;
