import React from 'react'
import Footer from '../footer'
import Header from '../header'

function NccTeam() {
    return (
        <>
            <Header />
            <div className="rs-breadcrumbs bg-6">
                <div className="container">
                    <div className="content-part text-center">
                        <h1 className="breadcrumbs-title white-color mb-0">NCC <span> Team Members</span></h1>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-8 col-lg-6">
                        <div
                            className="section_heading text-center wow fadeInUp"
                            data-wow-delay="0.2s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.2s",
                                animationName: "fadeInUp"
                            }}
                        >
                            <div className="line" />
                        </div>
                    </div>
                </div>
                <div className="row mt-20">
                    {/* Single Advisor*/}
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div
                            className="single_advisor_profile wow fadeInUp"
                            data-wow-delay="0.2s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.2s",
                                animationName: "fadeInUp"
                            }}
                        >
                            {/* Team Thumb*/}
                            <div className="advisor_thumb">
                                <img
                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                    alt=""
                                />
                                {/* Social Info*/}
                                <div className="social-info">
                                    <a href="/">
                                        <i className="fa fa-facebook" />
                                    </a>
                                    <a href="/">
                                        <i className="fa fa-twitter" />
                                    </a>
                                    <a href="/">
                                        <i className="fa fa-linkedin" />
                                    </a>
                                </div>
                            </div>
                            {/* Team Details*/}
                            <div className="single_advisor_details_info">
                                <h6>Samantha Sarah</h6>
                                <p className="designation">Founder &amp; CEO</p>
                            </div>
                        </div>
                    </div>
                    {/* Single Advisor*/}
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div
                            className="single_advisor_profile wow fadeInUp"
                            data-wow-delay="0.3s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.3s",
                                animationName: "fadeInUp"
                            }}
                        >
                            {/* Team Thumb*/}
                            <div className="advisor_thumb">
                                <img
                                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                    alt=""
                                />
                                {/* Social Info*/}
                                <div className="social-info">
                                    <a href="/">
                                        <i className="fa fa-facebook" />
                                    </a>
                                    <a href="/">
                                        <i className="fa fa-twitter" />
                                    </a>
                                    <a href="/">
                                        <i className="fa fa-linkedin" />
                                    </a>
                                </div>
                            </div>
                            {/* Team Details*/}
                            <div className="single_advisor_details_info">
                                <h6>Nazrul Islam</h6>
                                <p className="designation">UI Designer</p>
                            </div>
                        </div>
                    </div>
                    {/* Single Advisor*/}
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div
                            className="single_advisor_profile wow fadeInUp"
                            data-wow-delay="0.4s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.4s",
                                animationName: "fadeInUp"
                            }}
                        >
                            {/* Team Thumb*/}
                            <div className="advisor_thumb">
                                <img
                                    src="https://bootdey.com/img/Content/avatar/avatar6.png"
                                    alt=""
                                />
                                {/* Social Info*/}
                                <div className="social-info">
                                    <a href="/">
                                        <i className="fa fa-facebook" />
                                    </a>
                                    <a href="/">
                                        <i className="fa fa-twitter" />
                                    </a>
                                    <a href="/">
                                        <i className="fa fa-linkedin" />
                                    </a>
                                </div>
                            </div>
                            {/* Team Details*/}
                            <div className="single_advisor_details_info">
                                <h6>Riyadh Khan</h6>
                                <p className="designation">Developer</p>
                            </div>
                        </div>
                    </div>
                    {/* Single Advisor*/}
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div
                            className="single_advisor_profile wow fadeInUp"
                            data-wow-delay="0.5s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.5s",
                                animationName: "fadeInUp"
                            }}
                        >
                            {/* Team Thumb*/}
                            <div className="advisor_thumb">
                                <img
                                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                    alt=""
                                />
                                {/* Social Info*/}
                                <div className="social-info">
                                    <a href="/">
                                        <i className="fa fa-facebook" />
                                    </a>
                                    <a href="/">
                                        <i className="fa fa-twitter" />
                                    </a>
                                    <a href="/">
                                        <i className="fa fa-linkedin" />
                                    </a>
                                </div>
                            </div>
                            {/* Team Details*/}
                            <div className="single_advisor_details_info">
                                <h6>Niloy Islam</h6>
                                <p className="designation">Marketing Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NccTeam
