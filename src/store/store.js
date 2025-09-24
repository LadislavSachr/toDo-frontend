import { configureStore } from '@reduxjs/toolkit';
import authenticateSliceReducer from './authenticateSlice';
import tasksSliceReducer from './tasksSlice'

export default configureStore({
    reducer:{
        authenticated: authenticateSliceReducer,
        tasks: tasksSliceReducer
    }
});