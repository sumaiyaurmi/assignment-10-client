import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const TouristSpotCard = ({ card }) => {
  const {
    _id,
    image,
    tourist_spot_name,
    country_name,
    location,
    short_description,
    average_cost,
  } = card;

  return (
    <div>
      <Fade>
        <div className="card card-compact mt-10  shadow-xl hover:shadow-2xl">
          <div>
            <div className="hover:text-orange-500 p-3 font-bold text-xl">
              {tourist_spot_name}
            </div>
            <figure>
              <img src={image} className="h-[200px] w-[320px]" alt="Shoes" />
            </figure>
          </div>
          <div className="card-body">
            <p>{short_description}</p>
            <div>
              <p className=" text-left font-bold">
                Country :{" "}
                <span className="font-semibold text-yellow-600 ">
                  {country_name}
                </span>
              </p>
              <p className=" text-left font-bold">
                Location :{" "}
                <span className="font-semibold text-yellow-600 ">
                  {location}
                </span>
              </p>
            </div>
            <hr className="my-2" />
            <div className="card-actions flex  justify-between ">
              <p className=" text-left font-bold">
                Cost : <br />{" "}
                <span className="font-semibold text-orange-500 ">
                  {average_cost}
                </span>
              </p>
              <Link to={`/tourist-details/${_id}`}>
                <button className="btn  text-white bg-slate-500 hover:bg-orange-500 ">
                  view details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default TouristSpotCard;
