import React from 'react';

function GBasicInfo({children, date, link}) {
    return (
        <div className='Grid-Basic-Info'>
            {/* <p>{children}</p> */}
            <i>{date}</i>
            <a href={link}>{link}</a>
        </div>
    );
}

export default GBasicInfo;