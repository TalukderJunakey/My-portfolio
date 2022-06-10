import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from '../../Pages/Home/Banner'
import Experiences from './Experiences';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Experiences></Experiences>
        </div>
    );
};

export default Home;