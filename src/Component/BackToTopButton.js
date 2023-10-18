import React, { useState, useEffect } from 'react';
import '../style/BackToTopButton.css'

import customIcon from '../image/arrow-up-solid.svg';

function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };


    const iconStyle = {
        width: '32px',  
        height: '32px',
        filter: 'brightness(0) invert(1)'
        };
    

    return (
        <button
            onClick={scrollToTop}
            className={`back-to-top-button ${isVisible ? 'visible' : ''}`}
        >
        <img src={customIcon} alt="Custom Icon" style={iconStyle} />

        </button>
    );
}

export default BackToTopButton;
