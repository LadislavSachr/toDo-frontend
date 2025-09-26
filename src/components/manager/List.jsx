import { useDispatch, useSelector } from 'react-redux';
import { loadTasks } from '../../store/tasksSlice';
import { getAllTasks, loading, failed } from '../../store/tasksSlice';
import { useEffect, useState } from 'react';
import Task from './Task'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFull } from '@fortawesome/free-solid-svg-icons'

function List(){
    const dispatch = useDispatch();
    const tasks = useSelector(getAllTasks); // gets tasks from store
    const load = useSelector(loading); // gets loading state from store
    const fail = useSelector(failed); // gets failed state [tasks failed to load]
    const [show,setShow] = useState(['work','school','home']); // keeps track of filter state [by default it shows all tasks]

    useEffect(()=>{
        dispatch(loadTasks()); // loads tasks from database
    },[])

    function handleClick(e){ // click handler for filter checkboxes [changes show state]
        if(!e.target.checked){
            setShow((prev)=>prev.filter(i=>i!==e.target.id));
        }else{
            setShow((prev)=>[...prev,e.target.id]);
        }
    }

    if(load){ // if statement deciding what to render based on loading/failed/loaded state
        return (<div className='list'><h2>Loading your tasks!</h2></div>)
    }else if(fail){
        return (<div className='list'><h2>Failed to load tasks!</h2></div>)
    }else{
        if(tasks.length===0){
            return (<div className='list'><h2>You don't have any tasks!</h2></div>)
        }else{
            return (
                <div className='list'>
                    <h2>Your current tasks:</h2>
                    <div className='filter'>
                        <div className='filterBox'>
                            <div style={{color:'rgba(4, 170, 109, 0.3)'}}><FontAwesomeIcon icon={faSquareFull} /></div>
                            <label htmlFor="work">Work</label>
                            <input type="checkbox" name='filter' id='work' 
                                checked={show.includes('work')} 
                                onClick={handleClick} 
                                readOnly
                            />
                        </div>
                        <div className='filterBox'>
                            <div style={{color:'rgba(0, 80, 197, 0.3)'}}><FontAwesomeIcon icon={faSquareFull} /></div>
                            <label htmlFor="school">School</label>
                            <input type="checkbox" name='filter' id='school' 
                                checked={show.includes('school')} 
                                onClick={handleClick} 
                                readOnly
                            />
                        </div>
                        <div className='filterBox'>
                            <div style={{color:'rgba(209, 0, 0, 0.3)'}}><FontAwesomeIcon icon={faSquareFull} /></div>
                            <label htmlFor="home">Home</label>
                            <input type="checkbox" name='filter' id='home' 
                                checked={show.includes('home')} 
                                onClick={handleClick} 
                                readOnly
                            />
                        </div>
                    </div>
                    {tasks.map((task,id)=>{ // renders Task for each task in array 
                        if(show.includes(task.category)){ // check if the tasks category is inside show state [filter]
                            return <Task key={id} data={task}/>
                        }
                    })}
                </div>
            )
        }
    }
}

export default List;