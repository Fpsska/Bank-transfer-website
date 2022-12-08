import React from 'react';

import { useAppSelector } from '../../app/hooks';

import Nav from '../Nav/Nav';

import './burger.scss';

// /. imports

interface propsTypes {
    isAllowableRes: boolean;
}

// /. interfaces

const BurgerMenu: React.FC<propsTypes> = props => {
    const { isAllowableRes } = props;

    // /. props

    const { isBurgerVisible } = useAppSelector(state => state.mainSlice);

    // /. hooks

    return (
        <div
            className={
                isBurgerVisible && isAllowableRes ? 'burger visible' : 'burger'
            }
        >
            <div className="burger__wrapper">
                <Nav role={'burger__nav'} />
            </div>
        </div>
    );
};

export default BurgerMenu;
