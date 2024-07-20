import React, { useState, useEffect } from 'react';
import '../style/BackToTopButton.css';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollOffset = documentHeight * 0.5;

            if (window.scrollY > scrollOffset) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
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
        filter: 'brightness(0) invert(1)',
    };

    return (
        <a href='#hero'>
            <button
                onClick={scrollToTop}
                className={`back-to-top-button ${isVisible ? 'visible' : ''}`}
            >
                <MdKeyboardDoubleArrowUp style={iconStyle} />
                <span className='tooltiptext'>Go top page</span>
            </button>
        </a>
    );
}

export default BackToTopButton;
