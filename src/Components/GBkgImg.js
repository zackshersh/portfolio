import React from 'react';

function GBkgImg({bkg, vertical, reverse}) {



    return (
        <div className={`Grid-Bkg-Img ${"bkg-"+bkg} ${vertical ? 'Grid-Bkg-Vertical':'Grid-Bkg-Horizontal'} ${reverse ? "Grid-Bkg-Reverse":""}`}>
            
        </div>
    );
}

export default GBkgImg;