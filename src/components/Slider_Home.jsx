import React, { useEffect, useState } from 'react';

const images = [
    require('../images/pexels-daiangan-102129.jpg'),
    require('../images/pexels-kaip-996329.jpg'),
    require('../images/pexels-kseniachernaya-3965545.jpg'),
    require('../images/pexels-mdsnmdsnmdsn-1937336.jpg'),
    require('../images/pexels-mnzoutfits-1639729.jpg'),
    require('../images/pexels-nietjuh-934063.jpg'),         
];

export default function Slider_Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 3000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <style>
                {`
                    .slider {
                        position: relative;
                        height: 500px;
                        overflow: hidden;
                    }
                    .slide {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        transition: opacity 1s ease-in-out;
                        opacity: 0; /* Hide all slides initially */
                    }
                    .slide.active {
                        opacity: 1; /* Show active slide */
                    }
                    .text-overlay {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        color: black;
                        text-align: center;
                    }
                    .main-text {
                    color: #d47a87;
                        font-size: 36px;
                        font-weight: bold;
                        font-family: 'Arial', sans-serif; /* Change to desired font */
                    }
                    .sub-text {
                        font-size: 20px;
                        font-family: 'Arial', sans-serif; /* Change to desired font */
                        color: #d47a87;
                    }
                `}
            </style>
            <div className="slider">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="text-overlay">
                            <div className="main-text" >Fashion Trends</div>
                            <div className="sub-text">Explore our latest products</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
