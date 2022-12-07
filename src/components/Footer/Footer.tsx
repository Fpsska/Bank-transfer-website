import React from 'react';

import UserList from '../User/UserList';

import './footer.scss';

// /. imports

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <UserList role={'footer__users-list'} />
                    <p className="footer__info">
                        45k+ Regular User. <span>View Price Plan</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
