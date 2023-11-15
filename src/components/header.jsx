import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className="full-width-header header-style4">
                <div className="toolbar-area hidden-md">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="toolbar-contact">
                                    <ul>
                                        <li>
                                            <i className="flaticon-email" />
                                            <a href="mailto:info@yourwebsite.com">support@rstheme.com</a>
                                        </li>
                                        <li>
                                            <i className="flaticon-call" />
                                            <a href="tel:+123456789">(+123) 456789</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="toolbar-sl-share">
                                    <ul>
                                        <li className="opening">
                                            {" "}
                                            <i className="flaticon-clock" /> Mon - Fri: 9:00 am - 06.00pm /
                                            Closed on Weekends
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i className="fa fa-facebook" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i className="fa fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i className="fa fa-pinterest-p" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i className="fa fa-linkedin" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <header id="rs-header" className="rs-header">
                    <div className="menu-area menu-sticky">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="logo-area">
                                        <a href="index.html">
                                            <img src="assets/images/leftlogo.png" alt="logo" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-9 text-right">
                                    <div className="rs-menu-area">
                                        <div className="main-menu">
                                            <div className="mobile-menu">
                                                <a href='/' className="rs-menu-toggle">
                                                    <i className="fa fa-bars" />
                                                </a>
                                            </div>
                                            <nav className="rs-menu pr-65">
                                                <ul className="nav-menu">
                                                    <li className="rs-mega-menu mega-rs menu-item-has current-menu-item">
                                                        <Link to={"/"}>Home</Link>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="/">About Us</a>
                                                        <ul className="sub-menu">
                                                            <li className="menu-item-has-children">
                                                                <Link to={"/mission"}>Our Mission</Link>
                                                            </li>
                                                            <li>
                                                                <a href="services-single.html">Our Vission</a>
                                                            </li>
                                                            <li className="menu-item-has-children">
                                                                <a href="/">Our Objective</a>
                                                            </li>
                                                            <li>
                                                                <a href="price-tables.html">Our History</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="/">Our Team</a>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <Link to={"/gccteam"}>GCC Team</Link>
                                                            </li>
                                                            <li>
                                                                <Link to={"/nccteam"}>NCC Team</Link>
                                                            </li>
                                                            <li>
                                                                <Link to={"/lccteam"}>LCC Team</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="/">Activities</a>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <a href="blog.html">Socio Charitable</a>
                                                            </li>
                                                            <li className="last-item">
                                                                <a href="blog-single.html">Spiritual</a>
                                                            </li>
                                                            <li className="last-item">
                                                                <a href="blog-single.html">Evangelization</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="/">Gallery</a>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <Link to={"/videos"}>Videos</Link>
                                                            </li>
                                                            <li>
                                                                <Link to={"/gallery"}>Images</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has">
                                                        <Link to={'/contact'}>Contact Us</Link>
                                                    </li>
                                                </ul>{" "}
                                            </nav>
                                        </div>{" "}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

        </>
    )
}

export default Header
