import { useEffect, useState } from 'react';
import useAxios from '../../Usehooks/useAxios';
import AllSpotsCard from './AllSpotsCard';

const AllSpot = () => {

    const axiosSecure = useAxios();
    const [allSpots, setAllSpots] = useState([]);
  
    useEffect(() => {
      const getData = async () => {
        const { data } = await axiosSecure.get(`/allSpots`);
        setAllSpots(data);
        // console.log(data);
      };
      getData();
    }, [axiosSecure]);
  
    console.log(allSpots);
  

    return (
        <div>
        
        <div className="grid grid-cols-1 md:grid-cols-2   gap-12 my-10 ">
        {allSpots.map((spot) => (
          <AllSpotsCard key={spot._id}
          spot={spot}></AllSpotsCard>
        ))}
      </div>

        </div>
    );
};

export default AllSpot;