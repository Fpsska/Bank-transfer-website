import React, { useRef } from 'react';

import { useAppSelector } from '../../app/hooks';

import { useInput } from '../../hooks/useInput';

import UserList from '../User/UserList';

import flag_1 from '../../assets/images/flag_1.png';
import flag_2 from '../../assets/images/flag_2.png';
import flag_3 from '../../assets/images/flag_3.png';

import person from '../../assets/images/promoter.png';

// /. imports

const MainPage: React.FC = () => {
    const { subtitleText, requestError, requestStatus } = useAppSelector(
        state => state.mainSlice
    );

    const formRef = useRef<HTMLFormElement>(null!);

    const phoneInput = useInput('', {
        minLength: 4,
        maxLength: 12
    });

    // /. hooks

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        const outputValue = value.replace(/[!@#$%^&*()]/g, '');
        phoneInput.onInputChange(outputValue);
    };

    const onFormSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        // ** //
        console.log('sending data: ', {
            time: new Date().toLocaleString(),
            phone: phoneInput.value
        });
        // ** //
        phoneInput.onInputChange('');
        formRef.current.reset();
        phoneInput.setInputActiveStatus(false);
    };

    // /. functions

    return (
        <section className="about">
            <div className="about__wrapper">
                <div className="about__content">
                    <h1 className="about__title">
                        Now Buy Your PIN or <a href="#">Top Up</a> With With
                        Bank Transfer
                    </h1>
                    <p className="about__description">
                        {requestError ? (
                            <span>Sorry, something went wrong</span>
                        ) : requestStatus !== 'success' ? (
                            <span>Waiting for data loading</span>
                        ) : (
                            subtitleText
                        )}
                    </p>
                    <form
                        className="about__form callRequest-form"
                        ref={formRef}
                        onSubmit={e => phoneInput.value && onFormSubmit(e)}
                    >
                        <label
                            className="callRequest-form__label"
                            htmlFor="phone-input"
                        >
                            Get Started
                        </label>
                        <input
                            id="phone-input"
                            className={
                                phoneInput.isInputActive &&
                                !phoneInput.isInputValid
                                    ? 'callRequest-form__input no-valid'
                                    : 'callRequest-form__input'
                            }
                            type="text"
                            placeholder="Where do you want to call?"
                            required
                            value={phoneInput.value}
                            onChange={e => onInputChange(e)}
                            onBlur={() => phoneInput.onInputBlur()}
                        />
                        <>
                            {phoneInput.minLengthError &&
                                phoneInput.isInputActive && (
                                    <span className="warn warn-form">{`minimum length is should be ${phoneInput.minLengthCount} letter`}</span>
                                )}
                            {phoneInput.maxLengthError &&
                                phoneInput.isInputActive && (
                                    <span className="warn warn-form">{`maximum length is should be less ${phoneInput.maxLengthCount} letter`}</span>
                                )}
                        </>
                        <button
                            className="callRequest-form__button"
                            type="submit"
                            aria-label="get call request"
                            disabled={!phoneInput.isInputValid}
                        >
                            <svg
                                width="27"
                                height="27"
                                viewBox="0 0 27 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.4267 20.9866C17.1518 20.9866 20.9822 17.1561 20.9822 12.431C20.9822 7.70594 17.1518 3.87549 12.4267 3.87549C7.70155 3.87549 3.87109 7.70594 3.87109 12.431C3.87109 17.1561 7.70155 20.9866 12.4267 20.9866Z"
                                    stroke=""
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M23.1208 23.1252L18.4688 18.4731"
                                    stroke=""
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </form>
                </div>
                <div className="about__peview">
                    <div className="circle">
                        <div className="circle__template">
                            <img
                                className="circle__image"
                                src={flag_1}
                                alt="flag"
                            />
                        </div>
                        <div className="circle__template">
                            <img
                                className="circle__image"
                                src={flag_2}
                                alt="flag"
                            />
                        </div>
                        <div className="circle__template">
                            <img
                                className="circle__image"
                                src={flag_3}
                                alt="flag"
                            />
                        </div>
                        <div className="circle__template">
                            <img
                                className="circle__image"
                                src={flag_1}
                                alt="flag"
                            />
                        </div>
                        <div className="circle__template">
                            <img
                                className="circle__image"
                                src={flag_1}
                                alt="flag"
                            />
                        </div>
                        <div className="circle__center"></div>
                        <img
                            className="circle__background-img"
                            src={person}
                            alt="promoter"
                        />
                    </div>
                </div>
                <div className="about__users">
                    <UserList role={'about__users-list'} />
                    <p className="about__users-info">
                        45k+ Regular User. <a href="#">View Price Plan</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MainPage;
