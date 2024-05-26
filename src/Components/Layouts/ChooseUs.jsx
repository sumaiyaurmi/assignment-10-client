import React from "react";

const ChooseUs = () => {
  return (
    <div className="flex flex-col md:flex-row my-24 gap-6">
      <div className="relative">
        <img
          src="https://i.postimg.cc/QCkvLF4L/joseph-pearson-Uj749-Jv6-Otw-unsplash.jpg"
          className="rounded-lg"
          alt=""
        />
        <div className="absolute  -right-10  -bottom-5 md:-right-10 md:-bottom-5 lg:-right-16 text-white lg:-bottom-10 bg-orange-500 p-4 md:p-12 font-semibold text-xl md:text-2xl lg:text-3xl border-[10px] border-white">
          We Create Journeys <br /> Worth Taking For <br /> The Traveler
        </div>
      </div>
      <div className="md:w-1/2">
        <h4 className="font-semibold text-lg text-left first-letter:text-4xl font-serif">Why choose Us</h4>
        <h1 className="text-3xl font-serif md:text-4xl lg:text-5xl font-medium mt-6 mb-10 text-left">
          Our Experiences <br /> Meet High Quality <br /> Standards
        </h1>
       <div>
         <p className="mx-autp w-full ">
        Our team of travel experts meticulously selects and curates destinations to ensure you experience the best each location has to offer. From hidden gems to iconic landmarks, we provide comprehensive guides  to help you plan your perfect trip.
        </p>
     <div className="flex items-center justify-center">
     <ul type="none" className="text-lg  font-medium space-y-6 my-10">
          <div className="flex gap-3 items-center  ">
            {" "}
            <button> 📌</button> <li>Professional Tour Guide</li>
          </div>
          <div className="flex gap-3 items-center ">
            {" "}
            <button> 📌</button> <li>Exceptional flexibility</li>
          </div>
          <div className="flex gap-3 items-center ">
            {" "}
            <button> 📌</button> <li>Quality you can trust</li>
          </div>
          <div className="flex gap-3 items-center ">
            {" "}
            <button> 📌</button> <li>Award-winning support</li>
          </div>
        </ul>
     </div>
       </div>
        <button
          className="py-2 px-4 border my-4  w-1/2 md:w-1/3 hover:text-black hover:bg-orange-500
          border-black"
        >
          Contact Us →→
        </button>
      </div>
    </div>
  );
};

export default ChooseUs;
