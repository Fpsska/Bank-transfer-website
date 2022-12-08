import React from 'react';

import { NavLink } from 'react-router-dom';

import { useAppSelector } from '../../app/hooks';

import './nav.scss';

// /. imports

interface propTypes {
    role?: string;
    navLinkHandler?: () => void;
}

// /. interfaces

const Nav: React.FC<propTypes> = props => {
    const { role, navLinkHandler } = props;

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
                            <NavLink
                                className="nav__link"
                                to={template.link}
                                state={template.text}
                                onClick={navLinkHandler}
                            >
                                {template.text}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Nav;
