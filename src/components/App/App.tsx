import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './App.css';
import '../../assets/styles/style.scss';

// /. imports

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <main className="main"></main>
            <Footer />
        </div>
    );
};

export default App;
