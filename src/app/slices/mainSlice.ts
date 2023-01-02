import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchTextData } from '../api/fetchTextData';

// /. imports

interface mainSliceTypes {
    subtitleText: string;
    requestStatus: string;
    requestError: any;
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
    // extraReducers: {
    //     [fetchTextData.pending.type]: state => {
    //         state.requestStatus = 'loading';
    //     },
    //     [fetchTextData.fulfilled.type]: (
    //         state,
    //         action: PayloadAction<string[]>
    //     ) => {
    //         state.requestStatus = 'success';
    //         state.requestError = null;
    //         state.subtitleText = action.payload[0];
    //     },
    //     [fetchTextData.rejected.type]: (
    //         state,
    //         action: PayloadAction<null | string>
    //     ) => {
    //         state.requestStatus = 'failed';
    //         state.requestError = action.payload;
    //     }
    // }
    extraReducers: builder => {
        builder
            .addCase(fetchTextData.pending, state => {
                state.requestStatus = 'loading';
            })
            .addCase(fetchTextData.fulfilled, (state, action) => {
                state.requestStatus = 'success';
                state.requestError = null;
                state.subtitleText = action.payload[0];
            })
            .addCase(fetchTextData.rejected, (state, action) => {
                state.requestStatus = 'failed';
                if (action.payload) {
                    state.requestError = action.payload;
                }
            });
    }
});

export const { swithBurgerVisibleStatus } = mainSlice.actions;

export default mainSlice.reducer;
