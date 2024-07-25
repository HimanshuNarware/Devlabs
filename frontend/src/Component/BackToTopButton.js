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
            const scrollTop = window.scrollY;
            const progress = (scrollTop / documentHeight) * 100;

            setIsVisible(scrollTop > scrollOffset);
            setScrollProgress(progress);
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

    const strokeDasharray = 163.362;
    const strokeDashoffset = strokeDasharray - (strokeDasharray * scrollProgress) / 100;

    return (
        <button
            onClick={scrollToTop}
            className={`back-to-top-button ${isVisible ? 'visible' : ''}`}
            aria-label="Back to top"
        >
            <MdKeyboardDoubleArrowUp style={iconStyle} />
            <div className="scroll-progress">
                <svg className="progress-ring" width="60" height="60">
                    <circle
                        className="progress-ring__circle"
                        stroke="#0658ea"
                        strokeWidth="6"
                        fill="transparent"
                        r="26"
                        cx="30"
                        cy="30"
                        style={{ strokeDasharray, strokeDashoffset }}
                    />
                </svg>
            </div>
            <span className='tooltiptext'>Go top page</span>
        </button>
    );
}

export default BackToTopButton;
