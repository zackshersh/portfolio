import React, {useState} from 'react';

function GridWrapper({aI,g,sG,s,children,p,pT,pB,pR,pL,onTop}) {

    let validGrid = s ? sG ? sG : g : g;


    const [col,row] = validGrid ? validGrid.split("-") : "";
    const active = aI== p;

    const gridStyles = {
        gridRow: row,
        gridColumn: col,
        opacity: active ? 1 : 0,
        zindex: active ? onTop ? 5 : 3 : 0,
        position: "relative",
        display: active ? "block" : "none",
        paddingTop: pT ? "8px" : 0,
        paddingLeft: pL ? "8px" : 0,
        paddingRight: pR ? "8px" : 0,
        paddingBottom: pB ? "8px" : 0,
        
    }

    return (
        <div className='Grid-Wrapper' style={gridStyles}>
           {children} 
        </div>
    );
}

export default GridWrapper;