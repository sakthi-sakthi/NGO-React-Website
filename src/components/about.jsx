import React from 'react'

function About() {
    return (
        <>
            <div className="rs-about style3 pt-100 lg-pt-90 md-pt-80 pb-92 md-pb-72 sm-pb-80">
                <div className="container">
                    <div className="row y-middle">
                        <div className="col-lg-6 md-mb-30">
                            <div className="image-part">
                                <img src="assets/images/about/h8-left-img.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 pl-50 lg-pl-35 md-pl-15">
                            <div className="sec-title">
                                <div className="sub-title gray-color">About Us</div>
                                <h2 className="title mb-30">
                                    Choose UAC India For Your{" "}
                                    <span className="d-block blue-color">Non Profit Organization</span>
                                </h2>
                                <p className="desc2">
                                    We are a nonprofit organization that works to improve the lives of people in need around the world. We have over 25 years of experience in human resource management, delivering effective and sustainable solutions to the most pressing challenges of our time.
                                </p>
                                <div className="desc">
                                    <h5>Our Vision</h5>
                                    We envision a world where everyone has the opportunity to live a healthy, productive, and fulfilling life.
                                </div>
                                <div className="desc mt-20">
                                    <h5>Our Mission</h5>
                                    We empower people to overcome poverty, inequality, and injustice, by providing them with education, health, livelihoods, and humanitarian assistance.
                                </div>
                                <div className="btn-part mt-45">
                                    <a className="readon blue-btn" href="contact.html">
                                        Discover More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About
