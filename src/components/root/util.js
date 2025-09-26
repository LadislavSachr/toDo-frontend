const base = import.meta.env.VITE_API_URL;

// method to fetch asking backend for authentication
export const authenticateAPI = async () => {
    const response = await fetch(base+'/me',{
        method: 'GET',
        credentials: 'include'
    })
    return response;
}

// method to fetch logout to backend
export const logout = async () => {
    const response = await fetch(base+'/logout',{
        method: 'POST',
        credentials: 'include'
    })
    return response;
}