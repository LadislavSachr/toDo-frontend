const base = import.meta.env.VITE_API_URL;

export const authenticateAPI = async () => {
    const response = await fetch(base+'/me',{
        method: 'GET',
        credentials: 'include'
    })
    return response;
}

export const logout = async () => {
    const response = await fetch(base+'/logout',{
        method: 'POST',
        credentials: 'include'
    })
    return response;
}