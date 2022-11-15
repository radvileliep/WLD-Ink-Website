import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import React, { Component } from 'react';
import tattoo from "./tattoo.png";
import "./style.css";


class Header extends Component {
    state = { clicked: false }
    
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return(
            <div>
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

                        <div className="menu-icon" onClick={this.handleClick}>
                                <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                        </div>

                        <div className={this.state.clicked ? "pages active" : "pages"}>
                            <ul className='nav-list'>
                                <div onClick={() => window.location.replace("/#OurTeam")} > 
                                    <li className='nav-item'>Our Team</li>
                                </div>
                                <Link to="/gallery" style={{ textDecoration: 'none' }}> 
                                    <li className='nav-item'>Gallery</li>
                                </Link>
                                <Link to="/contacts" style={{ textDecoration: 'none'}}> 
                                    <li className='nav-item'>Contacts</li>
                                </Link>
                            </ul>
                            <div className='navbar-button'>
                                <Link to='/booking'> Book us
                                </Link>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header