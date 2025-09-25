import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { deleteTask } from '../../store/tasksSlice'
import { deleteTaskAPI } from './util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons' 

function Task(props){
    const [color,setColor] = useState("");
    const [hover,setHover] = useState(true);
    const dispatch = useDispatch();

    useEffect(()=>{
        switch(props.data.category){
            case 'work': 
                setColor('rgba(4, 170, 109, 0.3)');
                break;
            case 'school': 
                setColor('rgba(0, 80, 197, 0.3)');
                break;
            case 'home': 
                setColor('rgba(209, 0, 0, 0.3)');
                break;
            default: setColor('');
        }
    },[])

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
        <a onClick={handleClick} className='task' style={{backgroundColor:color}} onMouseEnter={()=>setHover(false)} onMouseLeave={()=>setHover(true)}>
            <p>{props.data.task}</p><div hidden={hover}><FontAwesomeIcon icon={faXmark}/></div>
        </a>
    )
}

export default Task;