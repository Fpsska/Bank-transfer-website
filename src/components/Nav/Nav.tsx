import React from 'react';

import './nav.scss';

// /. imports

interface propTypes {
    role?: string;
}

// /. interfaces

const Nav: React.FC<propTypes> = props => {
    const { role } = props;

    return (
        <nav className={`${role ? role : ''} nav`}>
            <ul className="nav__menu">
                <li className="nav__item">
                    <a
                        className="nav__link active"
                        href="#"
                    >
                        Mobile Top Up
                    </a>
                </li>
                <li className="nav__item">
                    <a
                        className="nav__link"
                        href="#"
                    >
                        About
                    </a>
                </li>
                <li className="nav__item">
                    <a
                        className="nav__link"
                        href="#"
                    >
                        Rate
                    </a>
                </li>
                <li className="nav__item">
                    <a
                        className="nav__link"
                        href="#"
                    >
                        Help
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
