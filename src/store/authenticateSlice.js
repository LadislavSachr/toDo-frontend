import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const options = {
    name: 'authenticated',
    initialState: false,
    reducers:{
        unAuthenticate:(state)=>{
            return false;
        },
        authenticate:(state)=>{
            return true;
        }
    }
}

const authenticatedSlice = createSlice(options);

export const isAuthenticated = (state) => state.authenticated;
export const {authenticate, unAuthenticate} = authenticatedSlice.actions;
export default authenticatedSlice.reducer;