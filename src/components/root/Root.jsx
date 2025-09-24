import Header from './Header'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { authenticate, unAuthenticate } from '../../store/authenticateSlice'
import { authenticateAPI } from './util'

function Root(){
    const dispatch = useDispatch();

    useEffect(()=>{
        const auth = async () => {
            const response = await authenticateAPI();
            if(response.ok){
                dispatch(authenticate());
            }else{
                dispatch(unAuthenticate());
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