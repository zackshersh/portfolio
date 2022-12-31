import React from 'react';

function GBodyText({children, smallMargin}) {
    return (
        <div className='Grid-Body-Text' style={{margin: smallMargin ? "8px 0" : "18px 0"}}>
            <p>{children}</p>
        </div>
    );
}

export default GBodyText;