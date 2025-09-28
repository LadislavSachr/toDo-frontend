import { NavLink, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { register } from "./util";
import { useSelector } from 'react-redux'
import { isAuthenticated } from '../../store/authenticateSlice'
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { switchLoading } from "../../store/isLoadingSlice";

function Register(){
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstPassword, setFirstPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector(isAuthenticated);

    async function handleSubmit(e){
        e.preventDefault();
        dispatch(switchLoading(true));
        if(firstPassword===secondPassword){ // checks if the passwords are matching
            const response = await register(firstName,lastName,email,firstPassword); // fetches data to server
            if(response.ok){ // checks if response is okay and redirects user to login if it's true
                navigate('../login');
            }else if(response.status===409){ // if 409 then a user already exists in database
                window.alert("User with that email already exists!")
                setEmail("");
                setFirstPassword("");
                setSecondPassword("");
            }else{
                window.alert("Whoops! Something went wrong, try again later!");
                window.location.reload();
            }
            dispatch(switchLoading(false));
        }else{
            setFirstPassword("");
            setSecondPassword("");
            window.alert("Passwords did not match!")
        }
    }

    if(auth){
        return <Navigate to="../"/>
    }else{
        return (
            <div className='logReg'>
                <h2>Register!</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="firstName">First name:</label><br />
                        <input type="text" name="firstName" id="firstName" 
                            value={firstName} 
                            onChange={(e)=>setFirstName(e.target.value)} 
                            pattern='^[^<>"]*$' 
                            title='Cannot contain these special characters: < > "'
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="lastName">Last name:</label><br />
                        <input type="text" name="lastName" id="lastName" 
                            value={lastName} 
                            onChange={(e)=>setLastName(e.target.value)} 
                            pattern='^[^<>"]*$'
                            title='Cannot contain these special characters: < > "'
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="email">Email:</label><br />
                        <input type="email" name="email" id="email" 
                            value={email} 
                            onChange={(e)=>setEmail(e.target.value)} 
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password (at least 8 characters):</label><br />
                        <input type="password" name="password" id="password" 
                            value={firstPassword} 
                            onChange={(e)=>setFirstPassword(e.target.value)} 
                            minLength="8" 
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password2">Confirm password:</label><br />
                        <input type="password" name="password2" id="password2" 
                            value={secondPassword} 
                            onChange={(e)=>setSecondPassword(e.target.value)} 
                            required
                        />
                    </div>
                    <input className="formButton" type="submit" value="Register!"/>
                    <p>Already have an account? Login <NavLink to='../login'>here</NavLink>!</p>
                </form>
            </div>
        );
    }
}

export default Register;