import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { setCSSMain } from '../utils';

import standard from "../standardValues.json"

function MainPageItem({img, grid, title, darker, to, activeItem, setActiveItem, color}) {

    const [col,row] = grid ? grid.split("-") : "";
    let active = activeItem == title;
    const contStyles = {
        gridRow:row,
        gridColumn:col,
        opacity: active || activeItem == "all" ? 1 : 0,
        zindex: activeItem == "all" ? 3 : 2
    };

    const titleStyles = {
        opacity: active ? 0 : 1
    }

    const handleClick = (e) => {
        if(activeItem == "all"){
            setActiveItem(title);
            setCSSMain(color ? color : "black");
        } else {
            if(active){
                setActiveItem("all");
                setCSSMain(standard.main)

            }
        }
    }

    
    return (
        <div onMouseDown={handleClick} className={`Main-Page-Item-Cont ${active ? "Active-Item" : ""}`} style={contStyles}>
        {/* <Link to={"/work/"+to}> */}
            <div className='Main-Page-Item'>
                <img className={darker?"Darker":""} src={img}></img>
                <p style={titleStyles}>{title}</p>
                <div className='Color-Overlay'></div>
            </div>
        {/* </Link> */}
        </div>
    );
}

export default MainPageItem;