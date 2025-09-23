import {useState} from 'react';

function Receiver(){
    const [count, setCount] = useState(0); // number of characters counter
    const [text, setText] = useState(""); // input value
    
    // changes values of count and text based on input
    function changeHandler(e){
        setText(e.target.value);
        setCount(e.target.value.length);
    }

    // handles adding a new task
    function handleClick(){
        //add send
        setText("");
        setCount(0);
    }

    return(
        <div>
            <label htmlFor="task">What's your next  task?</label><br/>
            <input type="text" name="task" id="task" maxLength="50" value={text} onChange={changeHandler} />{count}/50<br/>
            <button onClick={handleClick}>Add it!</button>
        </div>
    )
}

export default Receiver;

