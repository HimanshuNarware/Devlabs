import React from 'react';
import './TrailingCursor.css'; // Ensure you have a CSS file for styling the ripple effect
import cursorImage from '../../assets/mouse-cursor.png'; // Import your cursor image

const TrailingCursor = () => {
    const [cursorPosition, setCursorPosition] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setCursorPosition({ x: event.clientX, y: event.clientY });
        createRipple(event.clientX+30, event.clientY+30);
    };

    const createRipple = (x, y) => {
        const rippleContainer = document.createElement('div');
        let scrollLeft = window.pageXOffset;
        let scrollTop = window.pageYOffset;
        rippleContainer.className = 'ripple-container';

        for (let i = 0; i<2; i++) {
            const ripple = document.createElement('div');
            ripple.className = 'ripple';
            let relativeX = x + scrollLeft + Math.random() * 20 - 10; // Randomize position within a range
            let relativeY = y + scrollTop + Math.random() * 20 - 10; // Randomize position within a range
            ripple.style.left = `${relativeX - 5}px`;
            ripple.style.top = `${relativeY - 5}px`;
            rippleContainer.appendChild(ripple);
        }

        document.body.appendChild(rippleContainer);

        // Remove the ripple elements after the animation ends
        setTimeout(() => {
            rippleContainer.remove();
        }, 400);
    };

    React.useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div>
            <div className="cursor-container" style={{ left: cursorPosition.x, top: cursorPosition.y + 32 }}>
                <img src={cursorImage} alt="custom cursor" className="custom-cursor" />
            </div>
        </div>
    );
};

export default TrailingCursor;
