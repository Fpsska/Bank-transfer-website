import React from 'react';

import { useWidthHandler } from '../../hooks/useWidthHandler';

import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import BurgerButton from '../BurgerMenu/BurgerButton';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

import './header.scss';
import logo from '../../assets/images/logo-icon.svg';

// /. imports

const Header: React.FC = () => {
    const { isAllowableRes } = useWidthHandler({ min: 320, max: 700 });

    // /. hooks

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Logo
                        role={'header__logo'}
                        img={logo}
                    />
                    <Nav role={'header__nav'} />
                    <button className="header__button button">Sign Up</button>
                </div>
                <>{isAllowableRes && <BurgerButton />}</>
                <BurgerMenu isAllowableRes={isAllowableRes} />
            </div>
        </header>
    );
};

export default Header;
