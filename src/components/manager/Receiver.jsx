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
            dispatch(addTask(task));
            setCategory("")
            setText("");
            setCount(0);
        }else{
            window.alert('Whoops! Something went wrong!');
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">What's your next  task?</label><br/>
                <input type="text" name="task" id="task" maxLength="50" value={text} onChange={changeHandler} required/>{count}/50<br/>
                <label htmlFor="category">Category:</label>
                <select name="category" id="category" value={category} onChange={(e)=>setCategory(e.target.value)} required>
                    <option value="" disabled hidden>Select category</option>
                    <option value="work">Work</option>
                    <option value="school">School</option>
                    <option value="home">Home</option>
                </select><br />
                <input type="submit" value="Add it!" readOnly/>
            </form>
        </div>
    )
}

export default Receiver;

