import React from 'react';

import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';

import './header.scss';
import logo from '../../assets/images/logo-icon.svg';

// /. imports

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Logo
                        role={'header__logo'}
                        img={logo}
                    />
                    <Nav role={'header__nav'} />
                    <button className="header__button">Sign Up</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
