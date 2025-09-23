const base = import.meta.env.VITE_API_URL;

export const login = async (email,password) =>{
    const response = await fetch(base+'/login',{
        method: 'POST',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email,password})
    });
    return response;
}