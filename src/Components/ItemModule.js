import React, { useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';

// import img from "../assets/images/jfk-wave.png"

function ItemModule({name, id}) {

    const linkRef = useRef();

    const handleClick = () => {
        linkRef.current.click()
    }

    return (
        <div onMouseDown={handleClick} className='Item-Module' id={id}>
        {/* <img src={img}></img> */}
            <p>{name}</p>
            <Link ref={linkRef} to={`/work/${id}`}></Link>
        </div>
    );
}

export default ItemModule;