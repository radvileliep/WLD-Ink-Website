import React from 'react';
import "./contacts.css";
import tattooVid from "../Images/tattoo-video.mp4";

const Contacts = () => {
    return (
    <>
    <div className='hero-back'>
        <video  className='video1' src={tattooVid} autoPlay loop muted />
    </div>
    <div className='container-fluid con'>
        <div className='container con'>
            <div className='row con'>
                <div className='con-col-1'>
                    <h3 className='col1-title'>Opening Hours</h3>
                    <table className='contact-table'>
                        <tr className='table-row'>
                            <th>Monday</th>
                            <th className='time'>10:00 - 21:00</th>
                        </tr>
                        <tr className='table-row'>
                            <th>Tuesday</th>
                            <th className='time'>10:00 - 21:00</th>
                        </tr>
                        <tr className='table-row'>
                            <th>Wendsday</th>
                            <th className='time'>10:00 - 21:00</th>
                        </tr>
                        <tr className='table-row'>
                            <th>Thursday</th>
                            <th className='time'>10:00 - 21:00</th>
                        </tr>
                        <tr className='table-row'>
                            <th>Friday</th>
                            <th className='time'>10:00 - 21:00</th>
                        </tr>
                        <tr className='table-row'>
                            <th>Saturday</th>
                            <th className='time'>10:00 - 15:00</th>
                        </tr>
                        <tr className='table-row'>
                            <th>Sunday</th>
                            <th className='time'>Closed</th>
                        </tr>
                    </table>
                <h3 className='col1-title'>Contacts</h3>
                <ul className='cont'>
                    <li className='cont-main'>Reception desk:</li>
                    <li className='cont-sec'>212-200-0438</li>
                    <li className='cont-sec'>contactsus@wldink.com</li>

                    <li className='cont-main two'>Office:</li>
                    <li className='cont-sec'>016-123-4567</li>
                    <li className='cont-sec'>support@WLDInk.com</li>
                </ul>
                </div>

                <div className='con-col-2'>
                    <h3 className='col2-title'>Where to Find Us</h3>
                        <div className='map-wrap'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24190.460213924056!2d-73.87988126459992!3d40.722253409103494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25e272209dded%3A0xc713fa428b2ab9ea!2sForest%20Hills%2C%20Queens%2C%20NY%2011375%2C%20USA!5e0!3m2!1sen!2slt!4v1668530762258!5m2!1sen!2slt" className='map'></iframe>
                        </div>
                </div>
            </div>
        </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
    )
}

export default Contacts