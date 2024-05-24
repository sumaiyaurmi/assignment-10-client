import React from 'react';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='font-openSens'>
            <Navbar></Navbar>
<Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;