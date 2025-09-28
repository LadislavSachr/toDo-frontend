const base = import.meta.env.VITE_API_URL;

// method to fetch login to backend
export const login = async (email,password) =>{
    try{
        const response = await fetch(base+'/login',{
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email,password})
        });
        return response;
    }catch(error){
        return false;
    }
}