import { useSelector, useDispatch } from "react-redux";
import { isAuthenticated, unAuthenticate } from "../../store/authenticateSlice";
import { logout } from './util'

function Header(){
    const auth = useSelector(isAuthenticated);
    const dispatch = useDispatch();

    async function handleClick(){
        const response = await logout();
        if(response.ok){
            dispatch(unAuthenticate());
        }
    }

    return (
        <div className='header' >
            <h1>To-Do list!</h1>
            {auth?<button onClick={handleClick}>Logout!</button>:<p>In order to use this application, you need to be logged in!</p>}
        </div>
    )
}

export default Header;