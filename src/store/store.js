import { configureStore } from '@reduxjs/toolkit';
import authenticateSliceReducer from './authenticateSlice'

export default configureStore({
    reducer:{
        authenticated: authenticateSliceReducer
    }
});