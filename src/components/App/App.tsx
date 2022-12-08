import React from 'react';

import { Route, Routes } from 'react-router';

import Layout from '../common/Layout';
import MainPage from '../pages/MainPage';
import PlaceholderPage from '../pages/PlaceholderPage';
import NoFoundPage from '../pages/NoFoundPage';

import './App.css';
import '../../assets/styles/style.scss';

// /. imports

const App: React.FC = () => {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="LuckyGroup-SPA-Task"
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
