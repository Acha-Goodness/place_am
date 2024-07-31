import React from 'react';
import "@styles/home.css";
import Image from 'next/image';
import logo from "@assets/images/placeam_logo.png";
import phone from "@assets/images/phone.png";

const Home = () => {
  return (
    <section className='main'>
        <div className='header'>
            <Image src={logo} alt="Placeam Logo"/>
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
                <h1 className='content-title'><span>Why</span> Placeam</h1>
                <div className='seamless-shopping card'>
                    <h2>Seamless Shopping Experience</h2>
                    <p>
                        Welcome to Placeam, the ultimate destination for luxury fashion enthusiasts. 
                        Our innovative digital marketplace revolutionizes the way you buy, sell, 
                        and donate high-end clothing and accessories.
                    </p>
                </div>
                <div className='authenticity card'>
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
            <div class="input-box">
                <input type="email" placeholder='sample@gmail.com'/>
                <button type="submit"> Join waitlist</button>
            </div>
        </form>
    </section>
  )
};

export default Home;