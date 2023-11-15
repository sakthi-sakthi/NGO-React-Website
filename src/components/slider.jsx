import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import axios from 'axios';
import ApiUrl from './API';

function Slider() {
    const [dynamicData, setDynamicData] = useState([]);

    useEffect(() => {
        axios.get(`${ApiUrl}/get/slider`)
            .then(response => {
                setDynamicData(response?.data?.data);
            })
            .catch(error => {
                console.error('Error fetching dynamic data:', error);
            });
    }, []);

    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
        >
            {dynamicData.map((data, index) => (
                <SwiperSlide key={index}>
                    <div className="slider slide1 ">
                        <img
                            src={data.image}
                            alt={`Dynamic Slide ${index + 1}`}
                            className="slider-image imageslider"
                        />
                        <div className="container">
                            <div className="content-part centered">
                                <div className="slider-des">
                                    <div className="sl-subtitle mb-2 mb-md-4">{data.contet}</div>
                                    <h1 className="sl-title mb-4 mb-md-5">{data.titl}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Slider;
