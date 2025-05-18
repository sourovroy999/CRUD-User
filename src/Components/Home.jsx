import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div>
            <Navbar/>
           
            <Outlet/>
        </div>
    );
};

export default Home;