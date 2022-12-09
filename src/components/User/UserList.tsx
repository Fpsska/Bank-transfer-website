import React, { useState, useEffect } from 'react';

import placeholder_image from '../../assets/images/avatar_placeholder.png';

import './user.scss';

// /. imports

interface propTypes {
    role?: string;
}

interface Iprofile {
    id: string;
    image: string;
    alt_description: string;
}

// /. interfaces

const UserList: React.FC<propTypes> = props => {
    const { role } = props;

    // /. props

    const onErrorImageHandler = (
        e: React.SyntheticEvent<HTMLImageElement>
    ): void => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = placeholder_image;
    };

    // /. functions

    return (
        <ul className={`${role ? role : ''} users-list`}>
            <li className="users-list__template">
                <img
                    className="users-list__image"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt="avatar"
                    onError={e => onErrorImageHandler(e)}
                />
            </li>
            <li className="users-list__template">
                <img
                    className="users-list__image"
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt="avatar"
                    onError={e => onErrorImageHandler(e)}
                />
            </li>
            <li className="users-list__template">
                <img
                    className="users-list__image"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt="avatar"
                    onError={e => onErrorImageHandler(e)}
                />
            </li>
            <li className="users-list__template users-list__template--add">
                <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill=""
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.5 3.95837V15.0417"
                        stroke=""
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M3.95703 9.5H15.0404"
                        stroke=""
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </li>
        </ul>
    );
};

export default UserList;
