import React, {useState} from 'react';

function GridWrapper({aI,g,sG,s,children,p,pT,pB,pR,pL,onTop, scroll, pL2, pR2, mL, mR, onlyWhen}) {

    let validGrid = s ? sG ? sG : g : g;


    const [col,row] = validGrid ? validGrid.split("-") : "";
    const active = aI== p;


    let display;
    if(!onlyWhen){
        display = "block"
    } else if (onlyWhen == "sm"){
        display = s ? "block" : "none"
    } else if (onlyWhen == "lg"){
        display = s ? "none" : "block"
    }

    const gridStyles = {
        gridRow: row,
        gridColumn: col,
        opacity: active ? 1 : 0,
        display: display,
        zindex: active ? onTop ? 5 : 3 : 0,
        position: "relative",
        display: active ? "block" : "none",
        paddingTop: pT ? "16px" : 0,
        paddingLeft: pL || pL2 ? pL ? "16px" : pL2 ? "32px" : 0 : 0,
        paddingRight: pR || pR2 ? pR ? "16px" : pR2 ? "32px" : 0 : 0,
        paddingBottom: pB ? "16px" : 0,

        marginLeft: mL ? "16px" : 0,
        marginRight: mR ? "16px" : 0,

        overflow: scroll && s ? "scroll" : "visible"

        
    }

    return (
        <div className='Grid-Wrapper' style={gridStyles}>
           {children} 
        </div>
    );
}

export default GridWrapper;