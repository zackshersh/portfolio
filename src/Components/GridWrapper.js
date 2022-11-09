import React, {useState} from 'react';

function GridWrapper({aI,g,children,p}) {

    const [col,row] = g ? g.split("-") : "";
    const active = aI== p;

    const gridStyles = {
        gridRow: row,
        gridColumn: col,
        opacity: active ? 1 : 0,
        zindex: active ? 3 : 0,
        display: active ? "block" : "none"
    }

    return (
        <div className='Grid-Wrapper' style={gridStyles}>
           {children} 
        </div>
    );
}

export default GridWrapper;