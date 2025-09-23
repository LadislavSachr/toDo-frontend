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
        <div>
            <div>
                <h1>To-Do list!</h1>
                {auth?<button onClick={handleClick}>Logout!</button>:""}
            </div>
        </div>
    )
}

export default Header;