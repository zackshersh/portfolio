import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { setCSSMain } from '../utils';

import standard from "../standardValues.json"

function MainPageItem({img, grid, smallGrid, title, darker, lighter, to, activeItem, setActiveItem, color, isSmall, customFilter, emphasis, remainFor = []}) {

    const [redirecting, setRedirecting] = useState(false);

    let validGrid = isSmall ? smallGrid ? smallGrid : grid : grid;

    const [col,row] = validGrid ? validGrid.split("-") : "";
    
    let active = activeItem == title;


    let remain = remainFor.indexOf(activeItem) != -1 || activeItem == "all";
    console.log(title,remain)

    const contStyles = {
        gridRow:row,
        gridColumn:col,
        opacity: active || activeItem == "all" || remain ? 1 : 0,
        zindex: activeItem == "all" ? 3 : 2
    };

    const titleStyles = {
        opacity: active || !remain ? 0 : 1,
        backgroundColor: emphasis ? "var(--main)":"",
        color: emphasis ? "white":"var(--main)",
        padding: emphasis ? "2px 4px":"0"
    }

    let imgStyles = {};
    if(customFilter) imgStyles.filter = "saturate(0)" + customFilter;

    const handleClick = (e) => {

        if(to){
            setRedirecting(true)
        }

        if(activeItem == "all" || remainFor.indexOf(activeItem) != -1){
            setActiveItem(title);
            setCSSMain(color ? color : "black");
        } else {
            if(active){
                setActiveItem("all");
                setCSSMain(standard.main)

            }
        }
        
    }
    
    const decideRedirect = () => {
        if(redirecting){
            return <Navigate to={"/"+to} />

        }
    }

    
    return (
        <div onMouseDown={handleClick} className={`Main-Page-Item-Cont ${active ? "Active-Item" : ""}`} style={contStyles}>
            <div className='Main-Page-Item'>
                <img style={imgStyles} className={`${darker?"Darker":""} ${lighter?"Lighter":""}`} src={img}></img>
                <p style={titleStyles}>{title}</p>
                <div className='Color-Overlay'></div>
            </div>
            {decideRedirect()}
        </div>
    );
}

export default MainPageItem;