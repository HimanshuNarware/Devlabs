import React, { useState, useEffect } from 'react';
import '../style/BackToTopButton.css';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            try {
                const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollOffset = documentHeight * 0.5;
                const scrollTop = window.scrollY;
                const progress = (scrollTop / documentHeight) * 100;
                setIsVisible(scrollTop > scrollOffset);
                setScrollProgress(progress);
            } catch (error) {
                console.error("Scroll handling error: ", error);
            }
        };
        const debounceHandleScroll = debounce(handleScroll, 100);
        window.addEventListener('scroll', debounceHandleScroll);
        return () => {
            window.removeEventListener('scroll', debounceHandleScroll);
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
                        style={{ strokeDasharray: 163.362, strokeDashoffset: 163.362 - (163.362 * scrollProgress) / 100 }}
                    />
                </svg>
            </div>
            <span className='tooltiptext'>Go top page</span>
        </button>
    );
}
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}
export default BackToTopButton;
