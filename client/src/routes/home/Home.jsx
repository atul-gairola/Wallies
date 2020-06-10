import React from 'react';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Inspiration from './components/Inspiration/Inspiration';
import Footer from './components/Footer/Footer';

const Home = () => {
    return <div>
           <Nav />
            <Hero />
            <Section2 />
            <Section3 />
            <Inspiration />
            <Footer />
           </div>
}

export default Home;