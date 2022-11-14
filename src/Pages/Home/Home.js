import React from 'react';
import "./home.css";
import heroImg from "../Images/img1.jpg";
import { Link } from 'react-router-dom';
import heroImg1 from "../Images/img-hero.jpg";
import panImg from "../Images/pano.jpg";
import Carousel from "../../components/Carousel/Carousel"



const Home = () => {
    return (
    <>
        <div className='container-fluid hero'>
            <div className='container hero'>
                <div className='row hero'>
                    <div className='col-1 hero'>
                        <h2 className='first-title'>Tattoo Studio</h2>
                        <h4 className='second-title'>Meet the new style perfection</h4>
                        <p className='par'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit at corporis ipsa, deserunt quam? Tenetur ex, placeat ad doloremque facilis dolore reprehenderit itaque iusto!</p>
                            <div className='hero-button'>
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <button className='read-more'>
                                        <p className="button-text2">READ MORE</p>
                                    </button>
                                </Link>
                            </div>
                    </div>
                    <div className='col-2 hero'>
                        <div className='wrapper'>
                            <h2 className='follow'>Follow us</h2>
                            <a href='https://www.instagram.com/' target="_blank">
                                <i class="fa-brands fa-instagram hero"></i>
                            </a>
                            <a href='https://www.facebook.com/' target="_blank">
                                <i class="fa-brands fa-facebook-f hero"></i>
                            </a>
                            <img className='hero-img1' src={heroImg1} alt='hero-image1'></img>
                            <img className='hero-img' src={heroImg} alt='hero-image'></img>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

{/*GALLERY LINK SECTION*/}
        <section className='to-gal'>
            <img src={panImg} alt="pan-to-gallery" className='pan-gal'></img>
            <div className='container-fluid gal-link'>
                <div className='container gal-link'>
                    <div className='row gal-link'>
                        <div className='empty'></div>
                        <div className='information'>
                            <h2 className='info-title'>
                                "Body as canvas" <br /> Our best projects
                            </h2>
                            <div className='info-wrap'>
                                <p className='par-gal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse metus odio, semper in mi eget, tempus gravida lacus. Vivamus in cursus lectus. Nullam accumsan turpis erat, nec mollis purus molestie at. Pellentesque sed ligula elementum, luctus quam ut, feugiat libero.
                                </p>
                                <div className='link-wrap'>
                                    <Link to="/gallery" style={{ textDecoration: 'none' }}>
                                        <h4 className='link-gallery'>
                                            View more 
                                        </h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div> 
        </section>

{/*OUR TEAM SECTION*/}
        <section>
            <div className='container-fluid slider'>
                <div className='container slider'>
                    <div className='row slider'>
                        <Carousel />
                    </div>
                </div>
            </div>
        </section>














    </>
    )
}

export default Home