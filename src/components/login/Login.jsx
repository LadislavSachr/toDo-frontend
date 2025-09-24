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

    async function handleSubmit(e){
        e.preventDefault();
        const response = await login(email,password);
        if(response.ok){
            dispatch(authenticate());
        }
    }

    if(auth){
        return <Navigate to="../"/>
    }else{
        return(
            <div className='logReg'>
                <h2>Login!</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="email">Email:</label><br/>
                        <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password:</label><br/>
                        <input type="text" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <input className="formButton" type="submit" value="Login!" readOnly/>
                    <div className='OAuth'>
                        <FontAwesomeIcon className='authIcon' icon={faFacebook} />
                        <FontAwesomeIcon className='authIcon' icon={faGoogle} />
                    </div>
                    <p>Don't have account yet? Register <NavLink to='../register'>here</NavLink>!</p>
                </form>
            </div>
        )
    }
}

export default Login;