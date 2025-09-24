import { useDispatch, useSelector } from 'react-redux';
import { loadTasks } from '../../store/tasksSlice';
import { getAllTasks, loading, failed } from '../../store/tasksSlice';
import { useEffect } from 'react';
import Task from './Task'

function List(){
    const dispatch = useDispatch();
    const tasks = useSelector(getAllTasks);
    const load = useSelector(loading);
    const fail = useSelector(failed);

    useEffect(()=>{
        dispatch(loadTasks());
    },[])

    if(load){
        return <h2>Loading your tasks!</h2>
    }else if(fail){
        return <h2>Failed to load tasks!</h2>
    }else{
        if(tasks.length===0){
            return <h2>You don't have any tasks!</h2>
        }else{
            return (
                <div>
                    <h2>Your current tasks:</h2>
                    {tasks.map((task,id)=>{
                        return <Task key={id} data={task}/>
                    })}
                </div>
            )
        }
    }
}

export default List;