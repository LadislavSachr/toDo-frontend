import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, maximumId } from '../../store/tasksSlice';
import { addTaskAPI } from './util';

function Receiver(){
    const [count, setCount] = useState(0); // number of characters counter
    const [text, setText] = useState(""); // input value
    const [category, setCategory] = useState("");
    const dispatch = useDispatch();
    const currentId = useSelector(maximumId);

    // changes values of count and text based on input
    function changeHandler(e){
        setText(e.target.value);
        setCount(e.target.value.length);
    }

    // handles adding a new task
    async function handleSubmit(e){
        e.preventDefault();
        const task = {
            task_id:currentId+1,
            task:text,
            category:category
        }
        const response = await addTaskAPI(task);
        if(response.ok){
            const json = await response.json();
            task.task=json.sanitized; // backend returns sanitized text that we then save to our store
            dispatch(addTask(task));
            setCategory("")
            setText("");
            setCount(0);
        }else{
            window.alert('Whoops! Something went wrong!');
        }
    }

    return(
        <div className='receiver'>
            <h2>What's your next  task?</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="task">Task:</label><br/>
                    <input className='taskInput' type="text" name="task" id="task" maxLength="150" value={text} onChange={changeHandler} required/>
                    <span className='counter'>{count}/150</span>
                </div>
                <div className='form-group'>
                    <label htmlFor="category">Category:</label>
                    <select name="category" id="category" value={category} onChange={(e)=>setCategory(e.target.value)} required>
                        <option value="" disabled hidden>Select category</option>
                        <option value="work">Work</option>
                        <option value="school">School</option>
                        <option value="home">Home</option>
                    </select>
                </div>
                <input className='formButton' type="submit" value="Add it!" readOnly/>
            </form>
        </div>
    )
}

export default Receiver;

