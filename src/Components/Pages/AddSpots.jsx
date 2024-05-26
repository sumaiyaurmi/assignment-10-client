import { useContext } from "react";
import useAxios from "../../Usehooks/useAxios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const AddSpots = () => {
  const axiosSecure = useAxios();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleAddSpots = async (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const tourist_spot_name = form.spotName.value;
    const seasonality = form.season.value;
    const country = form.country.value;
    const location = form.location.value;
    const description = form.description.value;
    const travel_time = form.travel.value;
    const total_visitors_per_year = parseInt(form.visitors.value);
    const average_cost = parseInt(form.cost.value);

    const spotData = {
      tourist_spot_name,
      description,
      image,
      seasonality,
      country,
      location,
      travel_time,
      total_visitors_per_year,
      average_cost,
      creator: {
        email: user?.email,
        name: user?.displayName,
        image: user?.photURL,
      },
    };
    console.log(spotData);
    try {
      const { data } = await axiosSecure.post(`/allSpots`, spotData);
      console.log(data);
      toast("Tourist Spots Added Successfully", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      navigate("/all-spot");
    } catch (err) {
      console.log(err);
      toast(err.message, {
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  return (
    <form
      onSubmit={handleAddSpots}
      className="my-2 mb-10 mt-4 shadow-2xl p-4 rounded-xl"
    >
      {/* 1st row */}
      <div className="grid grid-cols-1 md:grid-cols-2 my-6 gap-1 md:gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="text"
            placeholder="url"
            name="image"
            className="input input-bordered "
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Tourist Spot Name</span>
          </label>
          <input
            type="text"
            placeholder="spot name"
            name="spotName"
            className="input input-bordered "
            required
          />
        </div>
      </div>
      {/* 2nd row */}
      <div className="grid grid-cols-1 md:grid-cols-2 my-6 gap-1 md:gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Country Name</span>
          </label>
          <input
            type="text"
            placeholder="country name"
            name="country"
            className="input input-bordered "
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            placeholder="location"
            name="location"
            className="input input-bordered "
            required
          />
        </div>
      </div>
      {/* 3rd row */}
      <div className="grid grid-cols-1 md:grid-cols-2 my-6 gap-1 md:gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <input
            type="text"
            placeholder="description"
            name="description"
            className="input input-bordered "
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Seasonality</span>
          </label>
          <input
            type="text"
            placeholder=" seasonality"
            name="season"
            className="input input-bordered "
            required
          />
        </div>
      </div>

      {/* 5th row */}
      <div className="grid grid-cols-1 md:grid-cols-2 my-6 gap-1 md:gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Travel Time</span>
          </label>
          <input
            type="text"
            placeholder="travel time"
            name="travel"
            className="input input-bordered "
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Visitors Per Year</span>
          </label>
          <input
            type="number"
            placeholder=" Visitors Per Year"
            name="visitors"
            className="input input-bordered "
            required
          />
        </div>
      </div>
      {/* 6th row */}
      <div className="form-control">
        <label className="label">
          <span className="label-text"> Average Cost</span>
        </label>
        <input
          type="number"
          placeholder="cost"
          name="cost"
          className="input input-bordered w-full"
          required
        />
      </div>
      {/* 7th row */}
      <div>
        <button
          type="submit"
          className="btn my-12 w-1/2 md:w-1/4 hover:text-black hover:bg-orange-500
          border-orange-500 "
        >
          Add Spots
        </button>
      </div>
    </form>
  );
};

export default AddSpots;
