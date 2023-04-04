import React, { useEffect } from 'react';

import { Route, Routes } from 'react-router';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { fetchTextData } from '../../app/api/fetchTextData';

import Layout from '../common/Layout';
import MainPage from '../pages/MainPage';
import PlaceholderPage from '../pages/PlaceholderPage';
import NoFoundPage from '../pages/NoFoundPage';

import './App.css';
import '../../assets/styles/style.scss';

// /. imports

const App: React.FC = () => {
    const dispatch = useAppDispatch();

    // /. hooks

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(fetchTextData());
        }, 1800);
        return () => clearInterval(timer);
    }, []);

    // /. effects

    return (
        <div className="App">
            <Routes>
                <Route
                    path="Bank-transfer-website"
                    element={<Layout />}
                >
                    <Route
                        index
                        element={<MainPage />}
                    />
                    <Route
                        path="about"
                        element={<PlaceholderPage />}
                    />
                    <Route
                        path="rating"
                        element={<PlaceholderPage />}
                    />
                    <Route
                        path="help"
                        element={<PlaceholderPage />}
                    />
                    <Route
                        path="*"
                        element={<NoFoundPage />}
                    />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
