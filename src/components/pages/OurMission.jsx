import React from 'react'
import Header from '../header'
import Footer from '../footer'

function OurMission() {
    return (
        <>
            <Header />
            <>
                <div className="rs-breadcrumbs bg-1">
                    <div className="container">
                        <div className="content-part text-center">
                            <h1 className="breadcrumbs-title white-color mb-0">About</h1>
                        </div>
                    </div>
                </div>
                {/* Breadcrumbs Section End */}
                {/* About Section Start */}
                <div className="rs-about inner pt-100 lg-pt-92 md-pt-80 pb-100 md-pb-80">
                    <div className="container">
                        <div className="row y-middle mb-64 lg-mb-30 md-mb-0">
                            <div className="col-lg-6 md-mb-95">
                                <div className="image-part">
                                    <img src="assets/images/about/inner/left-img.jpg" alt="" />
                                    <div className="author-info">
                                        <h3 className="name">Marlina Moore</h3>
                                        <span className="designation">CEO &amp; Founder</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 pl-50 md-pl-15 pr-50 lg-pr-15">
                                <div className="sec-title mb-25">
                                    <div className="sub-title primary">About</div>
                                    <h2 className="title mb-18">
                                        We Provides Best Advice For Your Business
                                    </h2>
                                    <div className="desc">
                                        Reobiz donec pulvinar magna id leoersi pellentesque impered
                                        dignissim rhoncus euismod euismod eros vitae.
                                    </div>
                                </div>
                                <ul className="listing-style2 mb-33">
                                    <li>Production or Trading of Good or Services for Sale</li>
                                    <li>Cost of supplies and equipment</li>
                                    <li>Change in the volume of expected sales</li>
                                    <li>Change in the volume of expected sales</li>
                                    <li>Change in the volume of expected sales</li>
                                </ul>
                                <div className="btn-part">
                                    <a className="readon" href="/">
                                        Discover More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

            <Footer />
        </>
    )
}

export default OurMission
