import React from 'react';

import { Link } from 'react-router-dom';

import './logo.scss';

// /. imports

interface propTypes {
    role?: string;
    img: string;
}

// /. interfaces

const Logo: React.FC<propTypes> = props => {
    const { role, img } = props;

    return (
        <Link
            to="/LuckyGroup-SPA-Task/"
            className={`${role ? role : ''} logo`}
        >
            <img
                className="logo__image"
                src={img}
                alt="logo"
            />
            <span className="logo__text">Global</span>
        </Link>
    );
};

export default Logo;
