import { createSlice } from '@reduxjs/toolkit';

// /. imports

interface navSliceTypes {
    navTemplates: Inav[];
}

interface Inav {
    id: number;
    text: string;
    link: string;
}

// /. interfaces

const initialState: navSliceTypes = {
    navTemplates: [
        {
            id: 1,
            text: 'Mobile Top Up',
            link: '/Bank-transfer-website/'
        },
        {
            id: 2,
            text: 'About',
            link: 'about'
        },
        {
            id: 3,
            text: 'Rate',
            link: 'rating'
        },
        {
            id: 4,
            text: 'Help',
            link: 'help'
        }
    ]
};

// /. initialState

const navSlice = createSlice({
    name: 'navSlice',
    initialState,
    reducers: {}
});

// export const {  } = navSlice.actions;

export default navSlice.reducer;
