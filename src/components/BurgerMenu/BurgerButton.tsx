import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { swithBurgerVisibleStatus } from '../../app/slices/mainSlice';

import './burger.scss';

// /. imports

const BurgerButton: React.FC = () => {
    const { isBurgerVisible } = useAppSelector(state => state.mainSlice);

    const dispatch = useAppDispatch();

    // /. hooks

    const onBtnBurgerClick = (): void => {
        dispatch(swithBurgerVisibleStatus(!isBurgerVisible));
    };

    // /. functions

    useEffect(() => {
        const keyHandler = (e: KeyboardEvent) => {
            if (isBurgerVisible && e.code === 'Escape') {
                dispatch(swithBurgerVisibleStatus(!isBurgerVisible));
            }
        };

        document.addEventListener('keydown', keyHandler);
        return () => {
            document.removeEventListener('keydown', keyHandler);
        };
    }, [isBurgerVisible]);

    // /. effects

    return (
        <button
            className={
                isBurgerVisible ? 'burger-button transformed' : 'burger-button'
            }
            aria-expanded={isBurgerVisible}
            aria-label="burger button"
            onClick={onBtnBurgerClick}
        >
            <span aria-hidden="true"></span>
        </button>
    );
};

export default BurgerButton;
