import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/header-styles.css"

import standard from "../standardValues.json"
import { setCSSMain } from '../utils';

function Header({activeItem, setActiveItem, allWorkPage}) {

    const handleBack = () => {
        setActiveItem("all");
        setCSSMain(standard.main);
    }

    return (
        <div className='Header'>
            <div className='Header-Wrapper'>
                { activeItem == "all" 
                ? <Link to={"/"}>
                    <h3>Hi my name is Zack Hersh. Here is some stuff I made.</h3>
                 </Link> : allWorkPage ?
                 <Link to={"/featured-work"}>
                    <h3>← Back to Featured Projects</h3>
                 </Link> :
                 <a>
                     <h3 onMouseDown={handleBack}>← Back</h3>
                 </a>

                }

            </div>
        </div>
    );
}

export default Header;