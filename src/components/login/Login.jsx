import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { login } from './util'
import { useSelector, useDispatch } from 'react-redux'
import { isAuthenticated, authenticate } from '../../store/authenticateSlice'
import { Navigate } from 'react-router-dom'

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const auth = useSelector(isAuthenticated);

    async function handleClick(){
        const response = await login(email,password);
        if(response.ok){
            dispatch(authenticate());
        }
    }

    if(auth){
        return <Navigate to="../"/>
    }else{
        return(
            <div>
                <h2>In order to use this application you need to be logged in!</h2>
                <div>
                    <label htmlFor="email">Email:</label><br/>
                    <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
                    <label htmlFor="password">Password:</label><br/>
                    <input type="text" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
                    <button onClick={handleClick} >Login!</button><br/>
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faGoogle} />
                    <p>Don't have account yet? Register <NavLink to='../register'>here</NavLink>!</p>
                </div>
            </div>
        )
    }
}

export default Login;