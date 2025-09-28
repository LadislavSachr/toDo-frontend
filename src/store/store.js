import { configureStore } from '@reduxjs/toolkit';
import authenticateSliceReducer from './authenticateSlice';
import tasksSliceReducer from './tasksSlice';
import isLoadingSliceReducer from './isLoadingSlice';

export default configureStore({
    reducer:{
        authenticated: authenticateSliceReducer,
        tasks: tasksSliceReducer,
        isLoading: isLoadingSliceReducer
    }
});