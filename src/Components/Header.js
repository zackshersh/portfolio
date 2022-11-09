import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/header-styles.css"

import standard from "../standardValues.json"
import { setCSSMain } from '../utils';

function Header({activeItem, setActiveItem}) {

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
                 </Link> :
                 <a>

                     <h3 onMouseDown={handleBack}>← Back to all projects</h3>
                 </a>

                }

            </div>
        </div>
    );
}

export default Header;