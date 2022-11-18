import React from 'react';

function GdTitle({children,alignR, small}) {

    const h1Styles = {
        textAlign: alignR ? "right" : "left"
    }

    return (
        <div className={`Grid-Title ${small ? "Grid-Title-Small" : ""}`}>
            <h1 style={h1Styles}>{children}</h1>
        </div>
    );
}

export default GdTitle;