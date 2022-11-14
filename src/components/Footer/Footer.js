import React from 'react'
import "./style.css"
import tattoo from "../Header/tattoo.png";




const Footer = () => {
    return (
    <>
        <div className='container-fluid footer'>
            <div className='container footer'>
                <div className='row footer'>
                    <div className='logo-img'>
                        <img src={tattoo} id='logo-name'/>
                    </div>
                    <div className="cards">
                        <div className='address'>
                            <div className='card'>
                                <div className='card-box'>
                                    <h4>Address</h4>
                                    <p>Great st. 69, <br /> New York  </p>
                                </div>
                            </div>
                        </div>
                        <div className='contacts'>
                            <div className='card'>
                                <div className='card-box'>
                                    <h4>Contacts</h4>
                                    <p>0161234567 support@WLDInk.com</p>
                                </div>
                            </div>
                        </div>
                        <div className='office'>
                            <div className='card'>
                                <div className='card-box'>
                                    <h4>Office</h4>
                                    <p>Amazing blvd. 420, <br /> New York </p>
                                </div>
                            </div>
                        </div>

                    </div>
                        <div className='socials col-12'>
                            <div className='icon-wrap'>
                                <a href='https://www.instagram.com/' target="_blank">
                                    <i class="fa-brands fa-instagram footer"></i>
                                </a>
                                <a href='https://www.facebook.com/' target="_blank">
                                    <i class="fa-brands fa-facebook-f footer"></i>
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

        <div className='container-fluid end'>
            <div className='container end'>
                <div className='end'>
                    <p className='ending'>© Copyright 2022 ReinnaInc - Tattoo Studio website - All Rights Reserved </p>
                </div>
            </div>
        </div>
    </>
    )
}

export default Footer