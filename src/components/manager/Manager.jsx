import Receiver from './Receiver'
import List from './List'
import { useSelector } from 'react-redux';
import { isAuthenticated } from '../../store/authenticateSlice';
import { Navigate } from 'react-router-dom';
import styles from './modules/Manager.module.css'

function Manager(){
    const auth = useSelector(isAuthenticated);

    if(!auth){
        return <Navigate to='/login'/>
    }
    return(
        <div className={styles.main}>
            <Receiver/>
            <List/>
        </div>
    )
}

export default Manager;