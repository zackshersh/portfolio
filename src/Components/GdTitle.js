import React from 'react';

function GdTitle({children,alignR, small, xSmall, alignRSmall, isSmall,alignBottom}) {

    let align;
    if(alignR){
        align = "right"
    } else if(alignRSmall && isSmall){
        align = "right"
    } else {
        align = "left"
    }

    const contStyles = {
        alignItems: alignBottom ? "flex-end" : "center"
    }

    const h1Styles = {
        textAlign: align,
    }

    let smallClass = "";
    if(small) smallClass = "Grid-Title-Small";
    if(xSmall) smallClass = "Grid-Title-XSmall";

    return (
        <div style={contStyles} className={`Grid-Title ${smallClass}`}>
            <h1 style={h1Styles}>{children}</h1>
        </div>
    );
}

export default GdTitle;