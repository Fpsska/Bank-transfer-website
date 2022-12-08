import React from 'react';

import { useLocation } from 'react-router-dom';

// /. imports

const PlaceholderPage: React.FC = () => {
    const location = useLocation();

    return <h2 className="section-title">{location.state} page in progress</h2>;
};

export default PlaceholderPage;
