import React, { useState, useEffect } from 'react';
import '../style/BackToTopButton.css';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollOffset = documentHeight * 0.5;
            const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = Math.round((scrollTop * 100) / calcHeight);

            setScrollProgress(scrollPercent);

            if (scrollTop > scrollOffset) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', handleScroll); // Initial check when the page loads

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('load', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const iconStyle = {
        width: '2.5rem',
        height: '2.5rem',
        color: 'black', // Ensure the icon is black
    };

    const buttonStyle = {
        display: isVisible ? 'block' : 'none',
        background: `conic-gradient(#fae9d9 ${scrollProgress}%, #95bc3c ${scrollProgress}%)`,
    };

    return (
        <button
            onClick={scrollToTop}
            className={`back-to-top-button ${isVisible ? 'visible' : ''}`}
            style={buttonStyle}
        >
            <MdKeyboardDoubleArrowUp style={iconStyle} />
            <span className='tooltiptext'>Go top page</span>
        </button>
    );
}

export default BackToTopButton;
