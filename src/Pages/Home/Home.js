import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from '../../Pages/Home/Banner'
import Experiences from './Experiences';
import Contact from './Contact';
import Footer from '../Shared/Footer';


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Experiences></Experiences>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;