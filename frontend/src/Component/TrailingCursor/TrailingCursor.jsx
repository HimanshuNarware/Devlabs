import React, { useRef, useEffect, useState } from 'react';
import Styles from './TrailingCursor.module.css';


const TrailingCursor = () => {
    const [positions, setPositions] = useState([]);
    const maxFollowers = 40; 
    const ref=useRef();
    let timeout=null;

    function draw(e){
        const div=document.createElement('div');
        div.classList.add(Styles['follower'])
        div.style.top=(e.clientY)+"px"
        div.style.left=e.clientX+"px"
        ref.current.append(div);
        if(ref.current.childNodes.length>maxFollowers)
            erase()
        if(timeout)
            clearTimeout(timeout);
        timeout=setTimeout(eraseAll,500)
    }

    function erase(){
        ref.current.removeChild(ref.current.childNodes[0]);
    }

    function eraseAll(){
        while(ref.current.childNodes.length)
            erase()
    }

    return (
        <div id={Styles['cursor-bg']} ref={ref} onMouseMove={draw} >
        </div>
    );
};

export default TrailingCursor;
