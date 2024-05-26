import { useEffect, useState } from "react";
import useAxios from "../../Usehooks/useAxios";
import AllSpotsCard from "./AllSpotsCard";

const AllSpot = () => {
  const axiosSecure = useAxios();
  const [allSpots, setAllSpots] = useState([]);
const [asc,setAsc]=useState('')

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure.get(`/allSpots?sort=${asc ? 'asc' : 'dsc'}`);
      setAllSpots(data);
      // console.log(data);
    };
    getData();
  }, [axiosSecure,asc]);
  


  return (
    <div className="my-6 space-y-4">
       <div>
        <button className="btn mb-2 bg-orange-400 hover:text-white hover:bg-orange-500"
         onClick={()=>setAsc(!asc)}>
          {            asc? 'price: Descending Order' : "Price: Ascending Order"}
        </button>
       </div>
      <div className="grid grid-cols-1 md:grid-cols-2   gap-12 my-10 ">
        {allSpots.map((spot) => (
          <AllSpotsCard key={spot._id} spot={spot}></AllSpotsCard>
        ))}
      </div>
     
    </div>
  );
};

export default AllSpot;
