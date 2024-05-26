import React, { useContext, useEffect, useState } from "react";
import useAxios from "../../Usehooks/useAxios";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Mylist = () => {
  const axiosSecure = useAxios();
  const { user } = useContext(AuthContext);
  const [mylists, setMyLists] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure(`/allSpots/${user?.email}`);
      setMyLists(data);
    };
    getData();
  }, [user, setMyLists]);

  const handleDelete = (id) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const { data } = axiosSecure.delete(`/allSpots/${id}`);
        // console.log(data)
        const remaining = mylists.filter((list) => list._id !== id);
        setMyLists(remaining);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <section className="container px-4 mx-auto pt-1 my-10  ">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium">My Tourist Spots</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {mylists.length} Tourist Spots
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-3 text-sm font-semibold text-gray-700  text-left rtl:text-right "
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Tourist Spot Name</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-semibold  text-left rtl:text-right text-gray-500"
                    >
                      <span>Country</span>
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3.5 text-sm font-semibold  text-left rtl:text-right text-gray-500"
                    >
                      Average Cost
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3.5 text-sm font-semibold  text-left rtl:text-right text-gray-500"
                    >
                      Seasonality
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3.5 text-sm font-semibold  text-left rtl:text-right text-gray-500"
                    >
                      Travel Time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    ></th>
                    <th
                      scope="col"
                      className="px-6 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    ></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-left ">
                  {mylists.map((mylist) => (
                    <tr key={mylist._id}>
                      <td className=" py-4 px-4 text-sm text-black whitespace-nowrap">
                        {mylist.tourist_spot_name}
                      </td>

                      <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
                        {mylist.country}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        <td className="px-4 py-4 text-sm font-medium text-black whitespace-nowrap">
                          <p className="border px-2 bg-green-300 rounded-full">
                            {" "}
                            $ {mylist.average_cost}
                          </p>
                        </td>
                      </td>
                      <td className="px-4 py-4 text-sm text-black  whitespace-nowrap">
                        {mylist.seasonality}
                      </td>
                      <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
                        {mylist.travel_time}
                      </td>
                      <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
                        <Link to={`/spots-update/${mylist._id}`}>
                          {" "}
                          <button className=" p-3 rounded-2xl hover:bg-orange-300 font-semibold hover:bg-black hover:text-white">
                            Edit
                          </button>
                        </Link>{" "}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <button
                          onClick={() => handleDelete(mylist._id)}
                          className=" p-2 hover:bg-black rounded-2xl"
                        >
                          ❌
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mylist;
