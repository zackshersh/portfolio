import React from 'react';

function GBkgImg({bkg, vertical}) {



    return (
        <div className={`Grid-Bkg-Img ${"bkg-"+bkg} ${vertical ? 'Grid-Bkg-Vertical':'Grid-Bkg-Horizontal'}`}>
            
        </div>
    );
}

export default GBkgImg;