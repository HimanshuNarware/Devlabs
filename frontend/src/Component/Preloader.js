import React, { useState, useEffect } from 'react';
import '../style/preloader.css';
import pre from '../lottie/pre.json'
import Lottie from 'lottie-react';
import App from '../App';

function Preloader() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
    return (
        loading ?
            <div className='pre'>
                <Lottie className="preloader" animationData={pre} />
            </div>
            :
            //Rest Code
            <App />

    );
}
export default Preloader;