import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchTextData } from '../api/fetchTextData';

// /. imports

interface mainSliceTypes {
    subtitleText: string;
    requestStatus: string;
    requestError: null | string;
    isBurgerVisible: boolean;
}

// /. interfaces

const initialState: mainSliceTypes = {
    subtitleText: '',
    requestStatus: '',
    requestError: null,
    isBurgerVisible: false
};

// /. initialState

const mainSlice = createSlice({
    name: 'mainSlice',
    initialState,
    reducers: {
        swithBurgerVisibleStatus(state, action: PayloadAction<boolean>) {
            state.isBurgerVisible = action.payload;
        }
    },
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

export const { swithBurgerVisibleStatus } = mainSlice.actions;

export default mainSlice.reducer;
