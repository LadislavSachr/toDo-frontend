import Receiver from './Receiver'
import List from './List'
import { useSelector } from 'react-redux';
import { isAuthenticated } from '../../store/authenticateSlice';
import { Navigate } from 'react-router-dom';

function Manager(){
    const auth = useSelector(isAuthenticated);

    if(!auth){
        return <Navigate to='/login'/>
    }
    return(
        <div className='main'>
            <Receiver/>
            <List/>
        </div>
    )
}

export default Manager;