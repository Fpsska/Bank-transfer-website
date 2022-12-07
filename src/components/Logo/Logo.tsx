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
        <div className={`${role ? role : ''} logo`}>
            <img
                className="logo__image"
                src={img}
                alt="logo"
            />
            <span className="logo__text">Global</span>
        </div>
    );
};

export default Logo;
