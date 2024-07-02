import { useEffect, useState } from "react";
import useAxios from "../../Usehooks/useAxios";
import { Fade } from "react-awesome-reveal";
import "animate.css";
import TouristSpotCard from "./TouristSpotCard";

const TouristSports = () => {
  const axiosSecure = useAxios();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure.get(`/touristSpot`);
      setCards(data);
      // console.log(data);
    };
    getData();
  }, [axiosSecure]);

  // console.log(cards);

  return (
    <div className="my-10">
      <Fade >
        {" "}
        <h2 className="text-2xl md:text-4xl  font-semibold text-center animate__animated animate__fadeInUp ">
          Your Guide to Southeast Asia`s Best Destinations
        </h2>
      </Fade>{" "}
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card,index)=><TouristSpotCard key={index} card={card}></TouristSpotCard>)}
     </div>
    </div>
  );
};

export default TouristSports;
