import React from 'react';
import "./booking.css";
import { Link } from 'react-router-dom';
import Button from "../../components/Button/Button";

const Booking = () => {
    return (
    <>
        <div className='container-fluid book'>
            <div className='container book'>
                <div className='row book'>
                    <div className='row1'>
                        <h5 className='form-title'>Book an Appointment with Us</h5>
                    </div>
                    <div className='row2'>
                        <p className='title-par'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales Dellentesque felis, in dignissim diam eleifend et. Aenean sagittis lacus augue convallis.</p>
                    </div>


                    
                    <form className='booking'>
                    <div className='form row3'>
                        <div className='name col-1'>
                            <input type="text" id="fname" name="fname" placeholder='First Name' className='form-control'/>
                        </div>

                        <div className='surname col-2'>
                            <input type="text" id="lname" name="lname" placeholder='Last Name' className='form-control'/>
                        </div>
                    </div>


                    <div className='form row4'>
                        <div className='email col-1'>
                            <input type="email" id="email" name="email" placeholder='Email' className='form-control'/>
                        </div>
                        <div className='phone col-2'>
                            <input type="tel" id="phone" name="phone" placeholder='Phone' className='form-control'/>
                        </div>
                    </div>


                    <div className='form row5'>
                        <div className='theme col-1'>
                            <div className='form-control-label'>
                                <label for="checkbox" className='form-check-label'>Theme</label>
                            </div>
                            <div className='form-check-inline'>
                                <input type="checkbox" name="first" value="Yes" className='form-check-input'/>
                                <label className='form-check-label'>Consultation</label>
                            </div>
                            <div className='form-check-inline'>
                                <input type="checkbox" name="second" value="Yes" className='form-check-input'/>
                                <label className='form-check-label'>Appointment</label>
                            </div>
                            <div className='form-check-inline'>
                                <input type="checkbox" name="third" value="Yes" className='form-check-input'/>
                                <label className='form-check-label'>Correction</label>
                            </div>
                        </div>
                        <div className='form message col-2'>
                            <textarea name='message' className='form-control' placeholder='Message'></textarea>
                        </div>
                    </div>
                </form>
                <div className='button row'>
                    <Link to="//" style={{ textDecoration: 'none' }}>
                        <Button buttonSize="btn--medium">Submit</Button>
                    </Link>
                </div>
                <div className='par row'>
                    <p className='book par'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales Dellentesque felis, in dignissim diam eleifend et. Aenean sagittis lacus sed augue.</p>
                </div>
                
                <div></div>

                </div>
            </div>
        </div>
    </>
    )
}

export default Booking