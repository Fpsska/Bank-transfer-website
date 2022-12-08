import React from 'react';

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
        <a
            href="#"
            className={`${role ? role : ''} logo`}
            onClick={e => e.preventDefault()}
        >
            <img
                className="logo__image"
                src={img}
                alt="logo"
            />
            <span className="logo__text">Global</span>
        </a>
    );
};

export default Logo;
