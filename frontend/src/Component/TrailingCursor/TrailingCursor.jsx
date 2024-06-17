import React, { useEffect, useState } from 'react';
import Styles from './TrailingCursor.module.css';
import { PiCursorFill } from "react-icons/pi";
import { FaHandPointer } from "react-icons/fa";

const TrailingCursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    const handleMouseMove = (event) => {
        const scrollLeft = window.pageXOffset;
        const scrollTop = window.pageYOffset;
        setCursorPosition({ x: event.clientX + scrollLeft, y: event.clientY + scrollTop });
        createTrailing(event.clientX + 40, event.clientY + 40);
    };

    const handleMouseOver = (event) => {
        console.log(event.target.tagName)
        if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON') {
            setIsPointer(true);
        } else {
            setIsPointer(false);
        }
    };

    const createTrailing = (x, y) => {
        const trailingContainer = document.createElement('div');
        const scrollLeft = window.pageXOffset;
        const scrollTop = window.pageYOffset;
        trailingContainer.className = 'trailing-container';

        for (let i = 0; i < 2; i++) {
            const trailing = document.createElement('div');
            trailing.className = Styles['trailing'];
            const relativeX = x + scrollLeft + Math.random() * 20 - 10; // Randomize position within a range
            const relativeY = y + scrollTop + Math.random() * 20 - 10; // Randomize position within a range
            trailing.style.left = `${relativeX - 5}px`;
            trailing.style.top = `${relativeY - 5}px`;
            trailingContainer.appendChild(trailing);
        }

        document.body.appendChild(trailingContainer);

        // Remove the trailing elements after the animation ends
        setTimeout(() => {
            trailingContainer.remove();
        }, 400);
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <div>
            <div className={Styles["cursor-container"]} 
                style={{ 
                    left: `${cursorPosition.x}px`, 
                    top: `${cursorPosition.y}px`, 
                    position: 'absolute',  
                }}>
                {isPointer ?<FaHandPointer className={Styles["custom-cursor"]}/> :<PiCursorFill className={Styles["custom-cursor"]} style={{transform: 'rotate(12deg)'}}/>}
            </div>
        </div>
    );
};

export default TrailingCursor;
