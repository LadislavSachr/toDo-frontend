import Header from './Header'
import { Outlet } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authenticate, unAuthenticate } from '../../store/authenticateSlice'
import { authenticateAPI } from './util'
import { isLoading } from '../../store/isLoadingSlice';

function Root(){
    const dispatch = useDispatch();
    const loading = useSelector(isLoading);
    const loadRef = useRef(null);

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

    useEffect(()=>{ // controls loading screen
        if(loading){
            loadRef.current.style.display='flex';
        }else{
            loadRef.current.style.display='none';
        }
    },[loading])

    return(
        <>
            <div id="loadingOverlay" ref={loadRef}>
                <div id='spinner'></div>
            </div>
            <Header/>
            <Outlet/>
        </>
    )
}

export default Root;