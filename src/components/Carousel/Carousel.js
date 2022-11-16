import React from 'react';
import tat1 from "../../Pages/Images/tat1.jpg";
import tat2 from "../../Pages/Images/tat2.jpg";
import tat3 from "../../Pages/Images/tat3.jpg";
import tat4 from "../../Pages/Images/tat4.jpg";
import tat5 from "../../Pages/Images/tat5.jpg";
import tat6 from "../../Pages/Images/tat6.jpg";
import "./carousel.css"
import {MdChevronLeft, MdChevronRight } from "react-icons/md";

const CardSlider = (props) => {
    const slides = [
    {id:1, image:tat1, name:"Jonathan Wells", work:"-- Black and Grey work --", email:"j.wells@wld.com"},
    {id:2, image:tat6, name: "Brooklyn Woods", work:"-- American Traditional work--", email:"brookwoods@wld.com"},
    {id:3, image:tat5, name:"Lisa Juckston", work:"-- New School work --", email:"lisaJuckston@wld.com"},
    {id:4, image:tat2, name:"Christy Spark", work:"-- Black and Grey work --", email:"christyy27@wld.com"}, 
    {id:5, image:tat3, name:"Brandon Norris", work:"-- Tribal work --", email:"brannor@wld.com"}, 
    {id:6, image:tat4, name:"Paul Schnores", work:"-- Neo Traditional work --", email:"schonres.paul@wld.com"}
];

    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return(
        <>
            <div className="main-slider-container">
                <MdChevronLeft size={40}className="slider-icon left" onClick={slideLeft} />
                <div id="slider">
                    {
                    slides.map((slide, index) => {
                            return(
                                <div className="slider-card" key={index} style={{backgroundImage:`url(${slide.image})`}}>
                                    <div class="information-container">
                                        <h3 className="card-name">{slide.name}</h3>
                                        <h4 className='card-work'>{slide.work}</h4>
                                        <p className='Email'>{slide.email}</p>
                                        <p className='about-team'>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit. Fusce ornare risus vel tellus <br/> tempor tempor. Suspendisse ut lobortis sem, <br/> aliquam consequat nisi. Praesent ac scelerisque <br /> nulla. Maecenas sed magna quis leo fringilla <br /> molestie.</p>
                                        <div className='team-socials'>
                                            <a href='https://www.instagram.com/' target="_blank">
                                                <i class="fa-brands fa-instagram car"></i>
                                            </a>
                                            <a href='https://www.facebook.com/' target="_blank">
                                                <i class="fa-brands fa-facebook-f car"></i>
                                            </a>
                                            <a href='https://www.twitter.com/' target="_blank">
                                                <i class="fa-brands fa-twitter car"></i>
                                            </a>
                                        </div>
                                    </div>  
                                </div>
                            )
                        })
                    }
                </div>
                <MdChevronRight size={40} className="slider-icon right" onClick={slideRight}/>
            </div>  
        </>
    )
}

export default CardSlider;