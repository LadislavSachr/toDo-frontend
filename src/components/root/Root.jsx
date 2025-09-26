import Header from './Header'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { authenticate, unAuthenticate } from '../../store/authenticateSlice'
import { authenticateAPI } from './util'

function Root(){
    const dispatch = useDispatch();

    useEffect(()=>{ // on each render authenticates user [asks backend]
        const auth = async () => {
            const response = await authenticateAPI();
            if(response.ok){
                dispatch(authenticate()); // if user is authenticated on backend then it authenticates on frontend
            }else{
                dispatch(unAuthenticate()); // if user isn't authenticated on backend then it unAuthenticates on frontend
            }
        }
        auth();
    },[])

    return(
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default Root;