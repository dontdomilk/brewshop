import React from 'react';
import "./style.scss";

const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
};

export default Header;