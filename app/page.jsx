"use client"
import React, { useState, useEffect } from 'react';
import "@styles/home.css";
import Image from 'next/image';
import logo from "@assets/images/placeam_logo.png";
import phone from "@assets/images/phone.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Home = () => {
  const [isActive, setIsActive ] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
        setIsActive(!isActive)
      }, 4000)

      return () => {
        clearInterval(interval)
      }
  }, [isActive])

  return (
        <section className='main'>
            <div className='header'>
                <Image src={logo} className='logo' alt="Placeam Logo"/>
            </div>
            <div className='hero-section'>
                <div className="hero-overlay">
                    <h1>
                        Experience the Future of 
                        Luxury Fashion Resale with 
                        Placeam
                    </h1>
                </div>
            </div>
            <div className='main-content'>
                <div className='left-image'>
                    <Image src={phone} alt="Phone" className='phone-image'/>
                </div>
                <div className='right-content'>
                    {isActive ? <h1 className='content-title'><span>Meet</span> Placeam</h1> : <h1 className='content-title'><span>Why</span> Placeam</h1>}
                    
                    
                    <div className={ isActive ? `card active` : `card inActive`}>
                        <h2>Seamless Shopping Experience</h2>
                        <p>
                            Welcome to Placeam, the ultimate destination for luxury fashion enthusiasts. 
                            Our innovative digital marketplace revolutionizes the way you buy, sell, 
                            and donate high-end clothing and accessories.
                        </p>
                    </div>
                    <div className={ isActive ? `card inActive` : `card active`}>
                        <h2>Authenticity Guaranteed</h2>
                        <p>
                            Placeam offers an intuitive, user-friendly platform for all your luxury fashion needs. 
                            From listing your items to making secure purchases, 
                            our streamlined process ensures a hassle-free experience for both buyers and sellers.
                        </p>
                    </div>
                </div>
            </div>
            <form className='waitlist-form'>
                <h1>Join the Waitlist</h1>
                <p>
                    Buy, sell, and donate high-end fashion effortlessly. 
                    Stay ahead in the world of sustainable luxury, 
                    join the waitlist now!
                </p>
                <div className="input-box">
                    <input type="email" placeholder='sample@gmail.com'/>
                    <button type="submit"> Join waitlist</button>
                </div>
            </form>
            <div className='social-icons'>
                <FaXTwitter className='icon'/>
                <FaInstagram className='icon'/>
                <FaFacebookF className='icon'/>
            </div>
        </section>
  )
};

export default Home;