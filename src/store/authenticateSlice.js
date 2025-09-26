import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'authenticated',
    initialState: false,
    reducers:{
        unAuthenticate:()=>{
            return false;
        },
        authenticate:()=>{
            return true;
        }
    }
}

const authenticatedSlice = createSlice(options);
// slice of store that controls authentication

export const isAuthenticated = (state) => state.authenticated;
export const {authenticate, unAuthenticate} = authenticatedSlice.actions;
export default authenticatedSlice.reducer;