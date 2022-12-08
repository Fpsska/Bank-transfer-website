import React from 'react';

import { useAppSelector } from '../../app/hooks';

import './nav.scss';

// /. imports

interface propTypes {
    role?: string;
}

// /. interfaces

const Nav: React.FC<propTypes> = props => {
    const { role } = props;

    // /. props

    const { navTemplates } = useAppSelector(state => state.navSlice);

    // /. hooks

    return (
        <nav className={`${role ? role : ''} nav`}>
            <ul className="nav__menu">
                {navTemplates.map(template => {
                    return (
                        <li
                            className="nav__item"
                            key={template.id}
                        >
                            <a
                                className="nav__link"
                                href={template.link}
                            >
                                {template.text}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Nav;
