import React from 'react'

function Counts() {
    return (
        <>
            <div className="rs-counter style1 shape-bg1 pt-105 md-pt-82 pb-97 md-pb-77">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 md-mb-30">
                            <div className="couter-part plus">
                                <div className="icon-part">
                                    <img src="assets/images/counter/icon/1.png" alt="" />
                                </div>
                                <div className="rs-count">500</div>
                                <h5 className="title">Project Completed</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 md-mb-30">
                            <div className="couter-part plus">
                                <div className="icon-part">
                                    <img src="assets/images/counter/icon/2.png" alt="" />
                                </div>
                                <div className="rs-count">115</div>
                                <h5 className="title">HR Consultants</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 xs-mb-30">
                            <div className="couter-part plus">
                                <div className="icon-part">
                                    <img src="assets/images/counter/icon/3.png" alt="" />
                                </div>
                                <div className="rs-count">100</div>
                                <h5 className="title">Awards WON</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="couter-part thousand">
                                <div className="icon-part">
                                    <img src="assets/images/counter/icon/4.png" alt="" />
                                </div>
                                <div className="rs-count">920</div>
                                <h5 className="title">Happy Clients</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Counts
