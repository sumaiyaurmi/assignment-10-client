import React from 'react';
import Banner from '../Layouts/Banner';
import TouristSports from '../Layouts/TouristSports';
import ChooseUs from '../Layouts/ChooseUs';
import Newsletter from '../Layouts/Newsletter';
import Country from '../Layouts/Country';

const Home = () => {
    return (
        <div>
<Banner></Banner>
<TouristSports></TouristSports>
<ChooseUs></ChooseUs>
<Country></Country>
<Newsletter></Newsletter>
        </div>
    );
};

export default Home;