import { useSelector, useDispatch } from "react-redux";
import { isAuthenticated, unAuthenticate } from "../../store/authenticateSlice";
import { logout } from './util'

function Header(){
    const auth = useSelector(isAuthenticated);
    const dispatch = useDispatch();

    async function handleClick(){ // click handler to logout user
        const response = await logout(); // logs out user from backend
        if(response.ok){ // if log out was successfull on backend unAuthenticated user on frontend
            dispatch(unAuthenticate());
        }
    }

    return (
        <div className='header' >
            <h1>To-Do list!</h1>
            {auth?<button onClick={handleClick}>Logout!</button>:<p>In order to use this application, you need to be logged in!</p>}
            {/* Renders logout button or <p> text based on if a user is authenticated/logged in */}
        </div>
    )
}

export default Header;