import { NavLink, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { register } from "./util";
import { useSelector } from 'react-redux'
import { isAuthenticated } from '../../store/authenticateSlice'
import { Navigate } from "react-router-dom";

function Register(){
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstPassword, setFirstPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");

    const navigate = useNavigate();
    const auth = useSelector(isAuthenticated);

    async function handleSubmit(e){
        e.preventDefault()
        if(firstPassword===secondPassword){
            const response = await register(firstName,lastName,email,firstPassword); // fetches data to server
            if(response.ok){ // checks if response is okay and redirects user to login if it's true
                navigate('../login');
            }else if(response.status===409){ 
                window.alert("User with that email already exists!")
                setEmail("");
                setFirstPassword("");
                setSecondPassword("");
            }else{
                window.alert("Whoops! Something went wrong, try again later!");
                window.location.reload();
            }
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
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First name:</label><br />
                    <input type="text" name="firstName" id="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required/><br />
                    <label htmlFor="lastName">Last name:</label><br />
                    <input type="text" name="lastName" id="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)} required/><br />
                    <label htmlFor="email">Email:</label><br />
                    <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/><br />
                    <label htmlFor="password">Password (at least 8 characters):</label><br />
                    <input type="password" name="password" id="password" value={firstPassword} onChange={(e)=>setFirstPassword(e.target.value)} minLength="8" /><br />
                    <label htmlFor="password2">Confirm password:</label><br />
                    <input type="password" name="password2" id="password2" value={secondPassword} onChange={(e)=>setSecondPassword(e.target.value)} required/><br />
                    <input type="submit" value="Register!"/>
                </form>
                <p>Already have an account? Login <NavLink to='../login'>here</NavLink>!</p>
            </div>
        );
    }
}

export default Register;