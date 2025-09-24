import { useDispatch } from 'react-redux'
import { deleteTask } from '../../store/tasksSlice'
import { deleteTaskAPI } from './util';

function Task(props){
    const dispatch = useDispatch();

    async function handleClick(){
        const id = props.data.task_id;
        const response = await deleteTaskAPI(id);
        if(response.ok){
            dispatch(deleteTask({id}));
        }else{
            window.alert('Whoops! Something went wrong!');
        }
    }

    return(
        <a onClick={handleClick}>
            <p>{props.data.category}</p>
            <p>{props.data.task}</p>
        </a>
    )
}

export default Task;