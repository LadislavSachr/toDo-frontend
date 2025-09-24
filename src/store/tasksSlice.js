import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTasks, maxId } from './util';

export const loadTasks = createAsyncThunk(
    'tasks/loadTasks',
    async()=>{
        return getTasks();
    }
)

const options = {
    name: 'tasks',
    initialState: {
        currentMaxId: 0,
        tasks: [],
        isLoading: false,
        failedToLoad: false
    },
    reducers:{
        addTask:(state,action)=>{
            state.tasks.push(action.payload);
            state.currentMaxId=action.payload.task_id;
        },
        deleteTask:(state,action)=>{
            const {id} = action.payload;
            state.tasks = state.tasks.filter(task=>task.task_id!==id);
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(loadTasks.pending,(state)=>{
            state.isLoading=true;
            state.failedToLoad=false;
        })
        .addCase(loadTasks.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.failedToLoad=false;
            state.tasks = action.payload;
            state.currentMaxId = maxId(action.payload);
        })
        .addCase(loadTasks.rejected,(state)=>{
            state.isLoading=false;
            state.failedToLoad=true;
        })
    }
}

const tasksSlice = createSlice(options);

export const maximumId = (state) => state.tasks.currentMaxId;
export const loading = (state) => state.tasks.isLoading;
export const failed = (state) => state.tasks.failedToLoad;
export const getAllTasks = (state) => state.tasks.tasks;
export const { addTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;