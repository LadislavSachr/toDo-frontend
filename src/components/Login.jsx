import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'

function Login(){
    return(
        <div>
            <h2>In order to use this application you need to be logged in!</h2>
            <form action="">
                <label htmlFor="">Username:</label><br/>
                <input type="text" /><br/>
                <label htmlFor="">Password:</label><br/>
                <input type="text" /><br/>
                <input type="submit" value="Login!"/><br/>
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faGoogle} />
                <p>Don't have account yet? Register <NavLink to='../register'>here</NavLink>!</p>
            </form>
        </div>
    )
}

export default Login;