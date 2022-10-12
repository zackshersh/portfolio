import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/header-styles.css"

function Header(props) {
    return (
        <div className='Header'>
            <div className='Header-Wrapper'>
                <Link to={"/"}>
                    <h3>Hi my name is Zack Hersh. Here is some stuff I made.</h3>
                </Link>
            </div>
        </div>
    );
}

export default Header;