import React from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { swithBurgerVisibleStatus } from '../../app/slices/mainSlice';

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

    const dispatch = useAppDispatch();

    // /. hooks

    const onBurgerNavLinkClick = (): void => {
        dispatch(swithBurgerVisibleStatus(false));
    };

    // /. functions

    return (
        <div
            className={
                isBurgerVisible && isAllowableRes ? 'burger visible' : 'burger'
            }
        >
            <div className="burger__wrapper">
                <Nav
                    role={'burger__nav'}
                    navLinkHandler={onBurgerNavLinkClick}
                />
            </div>
        </div>
    );
};

export default BurgerMenu;
