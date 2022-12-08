import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchTextData } from './api/fetchTextData';

// /. imports

interface mainSliceTypes {
    subtitleText: string;
    requestStatus: string;
    requestError: null | string;
}

// /. interfaces

const initialState: mainSliceTypes = {
    subtitleText: '',
    requestStatus: '',
    requestError: null
};

// /. initialState

const mainSlice = createSlice({
    name: 'mainSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchTextData.pending.type]: state => {
            state.requestStatus = 'loading';
        },
        [fetchTextData.fulfilled.type]: (
            state,
            action: PayloadAction<string[]>
        ) => {
            state.requestStatus = 'success';
            state.subtitleText = action.payload[0];
        },
        [fetchTextData.rejected.type]: (
            state,
            action: PayloadAction<null | string>
        ) => {
            state.requestStatus = 'failed';
            state.requestError = action.payload;
        }
    }
});

// export const { } = mainSlice.actions;

export default mainSlice.reducer;
