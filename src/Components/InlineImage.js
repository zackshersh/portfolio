import React from 'react';

function InlineImage({src}) {
    return (
        <span className='Inline-Image'>
            <div className='Color-Overlay'></div>
            <img src={src} />
        </span>
    );
}

export default InlineImage;