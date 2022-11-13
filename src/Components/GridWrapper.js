import React, {useState} from 'react';

function GridWrapper({aI,g,children,p,pT,pB,pR,pL,onTop}) {

    const [col,row] = g ? g.split("-") : "";
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