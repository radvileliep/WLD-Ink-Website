import { Link } from "react-router-dom";
import React, { useState } from 'react';
import tattoo from "./tattoo.png";
import "./style.css";
import Button from "../Button/Button";
import { FaBars, FaTimes } from 'react-icons/fa';



const Header = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90){
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener("scroll", changeColor)


    const closeMenu = () => setClick(false)
    
        return(
            <div className={color? "header-bg" : "header"}>
                <div className='container-fluid navbar'>
                    <div className='container navbar'>

                        <div className='logo'> 
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <img src={tattoo} id='tattoo-gun' alt="logo-tattoo"/>
                            </Link>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <h4 className='logo-name'>WLD Ink</h4>
                            </Link>
                        </div>

                        <div className="menu-icon" onClick={handleClick}>
                                {click ? (<FaTimes size={30}/>)
                                : (<FaBars size={30} />)}
                        </div>

                        <div className={click ? "pages active" : "pages"}>
                            <ul className='nav-list' id="menu">
                                <div onClick={() => window.location.replace("/#OurTeam")} > 
                                    <li className='nav-item'>Our Team</li>
                                </div>
                                <Link to="/gallery" style={{ textDecoration: 'none' }} onClick={closeMenu}> 
                                    <li className='nav-item'>Gallery</li>
                                </Link>
                                <Link to="/contacts" style={{ textDecoration: 'none'}} onClick={closeMenu}> 
                                    <li className='nav-item'>Contacts</li>
                                </Link>
                            </ul>
                            <Link to='/booking' style={{ textDecoration: 'none' }} onClick={closeMenu}>  
                            <Button buttonSize="btn--medium">Book us</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


export default Header