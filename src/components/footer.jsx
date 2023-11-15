import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer id="rs-footer" className="rs-footer">
                <div className="container">
                    <div className="footer-content pt-80">
                        <div className="row">
                            <div className="col-lg-3 col-md-12 col-sm-12 md-mb-32 footer-widget">
                                <h4 className="widget-title">Quick Links</h4>
                                <ul className="address-widget pr-40">
                                    <li>
                                        <i className="fa fa-compass" />
                                        <div className="desc">
                                            <Link to={""}>Our History</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="fa fa-photo" />
                                        <div className="desc">
                                            <Link to={"gallery"}>Gallery</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="fa fa-youtube" />
                                        <div className="desc">
                                            <Link to={"/videos"}>Videos</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope" />
                                        <div className="desc">
                                            <Link to={"/contact"}>Contact Us</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 md-mb-32 footer-widget">
                                <h4 className="widget-title">Contact Info</h4>
                                <ul className="address-widget pr-40">
                                    <li>
                                        <i className="flaticon-location" />
                                        <div className="desc">
                                            374 William S Canning Blvd, Fall River MA 2721, USA
                                        </div>
                                    </li>
                                    <li>
                                        <i className="flaticon-call" />
                                        <div className="desc">
                                            <a href="tel:+8801739753105">(+880)173-9753105</a>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="flaticon-email" />
                                        <div className="desc">
                                            <a href="mailto:support@rstheme.com">support@rstheme.com</a>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="flaticon-clock" />
                                        <div className="desc">10:00 - 17:00</div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 footer-widget">
                                <h4 className="widget-title">Latest Posts</h4>
                                <div className="footer-post">
                                    <div className="post-wrap mb-15">
                                        <div className="post-img">
                                            <a href="blog-single.html">
                                                <img src="assets/images/blog/small/1.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="post-desc">
                                            <a href="blog-single.html">
                                                Covid-19 threatens the next generation of smartphones
                                            </a>
                                        </div>
                                    </div>
                                    <div className="post-wrap mb-15">
                                        <div className="post-img">
                                            <a href="blog-single.html">
                                                <img src="assets/images/blog/small/2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="post-desc">
                                            <a href="blog-single.html">
                                                Soundtrack filma Lady Exclusive Music
                                            </a>
                                        </div>
                                    </div>
                                    <div className="post-wrap">
                                        <div className="post-img">
                                            <a href="blog-single.html">
                                                <img src="assets/images/blog/small/3.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="post-desc">
                                            <a href="blog-single.html">
                                                Winged moved stars, fruit creature seed night.
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 md-mb-32 footer-widget">
                                <h4 className="widget-title">Our Location</h4>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62313.07779093296!2d78.55990141862482!3d12.544794892904402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badaaea950786f3%3A0x5f3b489cca9a30a2!2sBosco%20Soft%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1700025137802!5m2!1sen!2sin" width="300" height="150" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='uacindia'></iframe>
                              
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="footer-bottom">
                        <div className="row y-middle">
                            <div className="col-lg-12 col-md-8 sm-mb-21">
                                <div className="copyright text-center">
                                    <p><b>Copyright © 2023 National Coordination Council India, All rights reserved. Powered by <a href="https://boscosofttech.com/" target="_blank" rel="noreferrer"><b>Boscosofttech</b></a></b></p>
                                </div>
                            </div>
                            {/* <div className="col-lg-6 col-md-4 text-right sm-text-center">
                                <ul className="footer-social">
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
                            </div> */}
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
