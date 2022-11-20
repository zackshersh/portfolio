import React from 'react';

function GBodyList({title, items=[]}) {
    return (
        <div className='Grid-Body-List'>
            <p>{title}</p>
            <ul>
                {items.map((item,i) => {
                    return <li key={i}>{item}</li>
                })}
            </ul>
        </div>
    );
}

export default GBodyList;