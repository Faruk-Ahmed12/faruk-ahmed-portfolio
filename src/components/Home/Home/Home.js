import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Header from '../Header/Header';
import LifeJourney from '../LifeJourney/LifeJourney';
import Resume from '../Resume/Resume';
// import Testimonials from '../Testimonials/Testimonials';
import Touch from '../Touch/Touch';
import './Home.css'


const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <LifeJourney></LifeJourney>
            {/* <Testimonials></Testimonials> */}
            <Resume></Resume>
            <Touch></Touch>
            <Footer></Footer>
        </div>
    );
};

export default Home;