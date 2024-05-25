import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="carousel w-full rounded-2xl h-[600px] my-2">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.postimg.cc/0ySVpTY6/mike-swigunski-Of-u2a-Pwugw-unsplash.jpg"
          className="w-full"
        />
        <div className="absolute h-full  bg-gradient-to-r from-[#131212] to-[rgba(21, 21, 21, 0)] text-white">
          <div className="pl-4 pt-28 space-y-4">
            {" "}
            <h1 className="text-2xl md:text-4xl font-semibold">
              Tour<span className="text-orange-500 font-bold">M</span>aster is with You, <br />
              <span className="text-orange-500 font-bold">
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "for Adventure Awaits",
                    "Crafting Perfect Journeys",
                    "Every Step of the Way",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h1>
            <p className="text-white font-medium">
              Creating memorable travel experiences worldwide
            </p>
            <div className="pt-4">
              {" "}
              <Link to={"/login"}>
                <button
                  className="btn mr-4 px-6 hover:text-black hover:bg-orange-500
               border-orange-500 mr-2 "
                >
                  {" "}
                  Login
                </button>
              </Link>
              <Link to={"/sign-up"}>
                <button
                  className="btn hover:text-black hover:bg-orange-500
               border-orange-500 mr-2"
                >
                  {" "}
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute flex gap-4 transform -translate-y-1/2  right-5 bottom-5">
          <a
            href="#slide3"
            className="btn btn-circle hover:bg-black text-orange-500"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle hover:bg-black text-orange-500"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.postimg.cc/B65TbsG3/amjad-rana-Mr-KPi-yaj-C0-unsplash.jpg"
          className="w-full"
        />
        <div className="absolute h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white">
          <div className="pl-4 pt-28 space-y-4">
            {" "}
            <h1 className="text-2xl md:text-4xl font-semibold">
              TourMaster is with You, <br />
              <span className="text-orange-500 font-bold">
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "For  Adventure  Awaits",
                    "Crafting Perfect Journeys",
                    "Every  Step of  the  Way",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h1>
            <p className="text-white font-medium">
              Creating memorable travel experiences worldwide
            </p>
            <div className="pt-4">
              {" "}
              <Link to={"/login"}>
                <button
                  className="btn mr-4 px-6 hover:text-black hover:bg-orange-500
               border-orange-500 mr-2 "
                >
                  {" "}
                  Login
                </button>
              </Link>
              <Link to={"/sign-up"}>
                <button
                  className="btn hover:text-black hover:bg-orange-500
               border-orange-500 mr-2"
                >
                  {" "}
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute flex gap-4 transform -translate-y-1/2  right-5 bottom-5">
          <a
            href="#slide1"
            className="btn btn-circle hover:bg-black text-orange-500"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle hover:bg-black text-orange-500"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.postimg.cc/zG4kv04J/ashique-anan-abir-s7-Oa-HZ90-UU8-unsplash.jpg"
          className="w-full"
        />
        <div className="absolute h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white">
          <div className="pl-4 pt-28 space-y-4">
            {" "}
            <h1 className="text-2xl md:text-4xl font-semibold">
              TourMaster is with You, <br />
              <span className="text-orange-500 font-bold">
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "for Adventure Awaits",
                    "Crafting Perfect Journeys",
                    "Every Step of the Way",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h1>
            <p className="text-white font-medium">
              Creating memorable travel experiences worldwide
            </p>
            <div className="pt-4">
              {" "}
              <Link to={"/login"}>
                <button
                  className="btn mr-4 px-6 hover:text-black hover:bg-orange-500
               border-orange-500 mr-2 "
                >
                  {" "}
                  Login
                </button>
              </Link>
              <Link to={"/sign-up"}>
                <button
                  className="btn hover:text-black hover:bg-orange-500
               border-orange-500 mr-2"
                >
                  {" "}
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute flex gap-4 transform -translate-y-1/2  right-5 bottom-5">
          <a
            href="#slide2"
            className="btn btn-circle hover:bg-black text-orange-500"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle hover:bg-black text-orange-500"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
