import React from 'react';
import icon from '../img/icon.png';

const Header = () => {

    return(
        <header class="header py-5">
        <img id="icon" src={icon} />
            <h1>Systemy Liczbowe</h1>
            <br/>
        </header>
    )

};

export default Header;