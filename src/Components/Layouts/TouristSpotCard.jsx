
const TouristSpotCard = ({ card }) => {
  const { image, tourist_spot_name, country_name, location,short_description, average_cost } =
    card;

  return (
    <div className="card card-compact mt-10  shadow-xl hover:shadow-2xl">
      <div>
        <div className="hover:text-orange-500 p-3 font-bold text-xl">{tourist_spot_name}</div>
        <figure>
        <img
          src={image}
          className="h-[200px] w-[320px]"
          alt="Shoes"
        />
      </figure></div>
      <div className="card-body">
        <p>{short_description}</p>
        <hr className="my-2"/>
        <div className="card-actions flex  justify-between ">
<p className=" text-left font-bold">Cost : <br /> <span className="font-semibold text-orange-500 ">{average_cost}</span></p>
          <button className="btn  text-white bg-slate-500 hover:bg-orange-500 ">view details</button>
        </div>
      </div>
    </div>
  );
};

export default TouristSpotCard;
