import React, {Component} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import logo from '../../assets/logo.png';


import './menuBar.css';

export default class MenuBar extends Component{
    scrollToTop = () => {
        scroll.scrollToTop();
      };
    
    render(){
        return(
            <nav className="menuContainer">
                <div className="leftContainer">
                    <img className="logoStyle" alt="logo" onClick={this.scrollToTop} src={logo}/>
                </div>
                <div className="rightContainer">
                    <ul className="menuContent">
                        <li>
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Home
                            </Link>
                        </li>
    
                        <li>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                About
                            </Link>
                        </li>
    
    
                        <li>
                            <Link
                                activeClass="active"
                                to="services"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Services
                            </Link>
                        </li>

                        <li>
                            <Link
                                activeClass="active"
                                to="cert"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Certificate
                            </Link>
                        </li>

                        <li>
                            <Link
                                activeClass="active"
                                to="hse"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Quality
                            </Link>
                        </li>

                        <li>
                            <Link
                                activeClass="active"
                                to="mission"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Vision
                            </Link>
                        </li>
    
                        <li>
                            <Link
                                activeClass="active"
                                to="gallery"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Gallery
                            </Link>
                        </li>
    
                        <li>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

// export default MenuBar;