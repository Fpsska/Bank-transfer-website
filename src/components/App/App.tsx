import React from 'react';

import Header from '../Header/Header';
import UserList from '../User/UserList';
import Footer from '../Footer/Footer';

import './App.css';
import '../../assets/styles/style.scss';

import flag_1 from '../../assets/images/flag-icon_1.svg';
import flag_2 from '../../assets/images/flag-icon_2.svg';
import flag_3 from '../../assets/images/flag-icon_3.svg';
import flag_4 from '../../assets/images/flag-icon_4.svg';

import person from '../../assets/images/promoter.png';

// /. imports

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <main className="main">
                <div className="container">
                    <section className="about">
                        <div className="about__wrapper">
                            <div className="about__content">
                                <h1 className="about__title">
                                    Now Buy Your PIN or <span>Top Up</span> With
                                    Bank Transfer
                                </h1>
                                <p className="about__description">
                                    We Make international calling simple,
                                    relible, and cheap basedon your unique
                                    calling behavior.
                                </p>
                                <a
                                    className="about__link button"
                                    href="#"
                                >
                                    Get Started
                                </a>
                                <form className="about__form callRequest-form">
                                    <input
                                        className="callRequest-form__input"
                                        type="text"
                                        placeholder="Where do you want to call?"
                                    />
                                    <button
                                        className="callRequest-form__button"
                                        type="submit"
                                        aria-label="get call request"
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
                                {/* <div className="about__background"></div> */}
                                <img
                                    className="about__background-img"
                                    src={person}
                                    alt="promoter"
                                />
                                <div className="circle">
                                    <img
                                        className="circle__image"
                                        src={flag_1}
                                        alt="flag"
                                    />
                                    <img
                                        className="circle__image"
                                        src={flag_2}
                                        alt="flag"
                                    />
                                    <img
                                        className="circle__image"
                                        src={flag_3}
                                        alt="flag"
                                    />
                                    <img
                                        className="circle__image"
                                        src={flag_4}
                                        alt="flag"
                                    />
                                    <img
                                        className="circle__image"
                                        src={flag_1}
                                        alt="flag"
                                    />
                                    <div className="circle__center"></div>
                                </div>
                            </div>
                            <div className="about__users">
                                <UserList role={'about__users-list'} />
                                <p className="about__users-info">
                                    45k+ Regular User.{' '}
                                    <a href="#">View Price Plan</a>
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;
