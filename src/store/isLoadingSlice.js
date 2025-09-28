import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'isLoading',
    initialState: false,
    reducers: {
        switchLoading: (state,action)=>{ // expects true/false
            return action.payload;
        }
    }
}

const isLoadingSlice = createSlice(options);

export const isLoading = (state) => state.isLoading;
export const {switchLoading} = isLoadingSlice.actions;
export default isLoadingSlice.reducer;