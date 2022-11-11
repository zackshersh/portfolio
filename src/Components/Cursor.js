import React from 'react';

import img from "../assets/images/filter-nobkg.png"

function Cursor({x,y}) {

    const imgWidth = 120;
    const halfW = imgWidth/2;

    const cursorStyles = {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10,
        transform: `translateX(${x-halfW}px) translateY(${y-halfW}px)`,
        transition: "all 0.15s cubic-bezier(.19,1.13,.8,.94)",
        pointerEvents: "none"
    }

    const imgStyles = {
        width: `${imgWidth}px`
    }

    return (
        <div style={cursorStyles} className='Cursor'>
            <img style={imgStyles} src={img}></img>
        </div>
    );
}

export default Cursor;