import { createAsyncThunk } from '@reduxjs/toolkit';

// /. imports

export const fetchTextData = createAsyncThunk(
    'gallerySlice/fetchImagesData',
    async (_, { rejectWithValue }) => {
        const URL = 'https://baconipsum.com/api/?type=lucky';

        try {
            const response = await fetch(URL);
            if (!response.ok) {
                throw new Error('Response: server error!');
            }

            const data = await response.json();

            return data;
        } catch (err: any) {
            return rejectWithValue(err.message);
        }
    }
);
