import React, { useEffect, useState } from "react";
import useAxios from "../../Usehooks/useAxios";
import CountryCard from "./CountryCard";
import { Fade } from "react-awesome-reveal";


const Country = () => {
  const axiosSecure = useAxios();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure.get(`/country`);
      setCards(data);
      // console.log(data);
    };
    getData();
  }, [axiosSecure]);

  console.log(cards);

  return (
    <div className="my-10">
      {" "}
     <Fade> <h2 className="text-2xl md:text-4xl font-serif font-medium text-center animate__animated animate__fadeInUp ">
      Uncover the Beauty of These Countries      </h2></Fade>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <CountryCard key={index} card={card}></CountryCard>
        ))}
      </div>
    </div>
  );
};

export default Country;
