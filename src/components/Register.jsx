import { NavLink } from "react-router-dom";

function Register(){
    return (
        <form action="">
            <label htmlFor="">Username:</label><br />
            <input type="text" /><br />
            <label htmlFor="">Password:</label><br />
            <input type="text" /><br />
            <label htmlFor="">Confirm password:</label><br />
            <input type="text" /><br />
            <input type="submit" value="Register!"/>
            <p>Already have an account? Login <NavLink to='../login'>here</NavLink>!</p>
        </form>
    );
}

export default Register;