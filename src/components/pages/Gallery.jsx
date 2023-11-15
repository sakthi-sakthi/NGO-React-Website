import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../header';
import Footer from '../footer';
import ApiUrl from '../API';

function Gallery() {
    const [portfolioItems, setPortfolioItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${ApiUrl}/get/gallery_images`)
            .then(response => {
                setPortfolioItems(response?.data?.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Header />
            <div className="rs-breadcrumbs bg-6">
                <div className="container">
                    <div className="content-part text-center">
                        <h1 className="breadcrumbs-title white-color mb-0">Gallery</h1>
                    </div>
                </div>
            </div>
            <div className="rs-portfolio style3 pt-92 md-pt-72 pb-148 lg-pb-133 md-pb-51">
                <div className="container">
                    <div className="row">
                        {loading && <h5><b>Loading...</b></h5>}
                        {!loading && portfolioItems?.map(item => (
                            <div className="col-lg-3 col-md-6 mb-30" key={item?.id}>
                                <div className="portfolio-item">
                                    <div className="image-part">
                                        {item?.image ? (
                                            <img
                                                src={item?.image}
                                                alt={item?.title}
                                                style={{ width: '100%', height: 'auto', maxHeight: '260px'}}
                                            />
                                        ) : (
                                            <p>No image available</p>
                                        )}
                                    </div>
                                    <div className="content-part">
                                        <div className="middle">
                                            <h4 className="title">
                                                <h5 className="text-white">{item?.title}</h5>
                                            </h4>
                                            <span className="categories">
                                                <p className="text-white">{item?.date}</p>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {!loading && portfolioItems && portfolioItems.length === 0 && (
                            <div className="col-12">
                                <h5><b>No Image available</b></h5>
                            </div>
                        )}
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Gallery;
