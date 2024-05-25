import React, { useContext } from "react";
import useAxios from "../../Usehooks/useAxios";
import { useNavigate } from "react-router-dom";

export const AddSpots = () => {
  const axiosSecure = useAxios();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleCreateAssignment = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const marks = parseInt(form.mark.value);
    const image = form.image.value;

    const assignmentData = {
      title,
      description,
      image,
      marks,
      level,
      deadline,
      creator: {
        email: user?.email,
        name: user?.displayName,
        image: user?.photURL,
      },
    };
    // console.log(assignmentData);
    try {
      const { data } = await axiosSecure.post(`/assignments`, assignmentData);
      // console.log(data);
      toast.success("successfully Created Assignment ");
      navigate("/assignments");
    } catch (err) {
      console.log(err);
      toast.error(`${err.message}`);
    }
  };

  return (
    <form>
      {/* 1st row */}
      <div className="grid grid-cols-2  gap-6">
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
      <div className="grid grid-cols-2  gap-6">
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
      <div className="grid grid-cols-2  gap-6">
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
            name=" season"
            className="input input-bordered "
            required
          />
        </div>
      </div>
      {/* 4th row */}
      <div className="grid grid-cols-2  gap-6">
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
            name=" season"
            className="input input-bordered "
            required
          />
        </div>
      </div>
      {/* 5th row */}
      <div className="grid grid-cols-2  gap-6">
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
    </form>
  );
};
