import React from 'react';
import "@styles/home.css";
import Image from 'next/image';
import logo from "@assets/images/placeam_logo.png";

const Home = () => {
  return (
    <section className='main'>
        <div className='header'>
            <Image src={logo} alt="Placeam Logo"/>
        </div>
        <div className='hero-section'>
            <div class="hero-overlay">
                <h1>
                    Experience the Future of 
                    Luxury Fashion Resale with 
                    Placeam
                </h1>
            </div>
        </div>
    </section>
  )
};

export default Home;