import React from 'react';

import img from "../assets/images/hand-normal.png";
import imgMask from "../assets/images/hand-normal-mask.png";

function Cursor({x,y}) {

    const imgWidth = 80;
    const halfW = imgWidth/2;

    const cursorStyles = {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10,
        transform: `translateX(${x-halfW}px) translateY(${y}px)`,
        transition: "all 0.15s cubic-bezier(.19,1.13,.8,.94)",
        pointerEvents: "none",
        isolation: "isolate",
        // backgroundColor: "white",
        filter: "contrast(2)",
        maskImage: imgMask,
        backgroundImage: img
    }

    const imgStyles = {
        width: `${imgWidth}px`,
        position: "relative",
        zIndex: 10,
        // opacity: 0

        // backgroundColor: "white"
    }

    const colorOverlayStyles = {
        backgroundColor: "var(--main)",
        position: "absolute",
        zIndex: 11,
        minWidth: "100%",
        minHeight: "100%",
        mixBlendMode: "lighten"
    }

    return (
        <div style={cursorStyles} className='Cursor normal-hand-mask'>
            <div style={colorOverlayStyles} className='Color-Overlay'></div>
            <img style={imgStyles} src={img}></img>
        </div>
    );
}

export default Cursor;