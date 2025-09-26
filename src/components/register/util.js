const base = import.meta.env.VITE_API_URL;

// method to fetch a registration of a new user
export const register = async (firstName, lastName, email, password) => {
    const user = {
        firstName,
        lastName,
        email,
        password
    }
    const response = await fetch(base+'/register',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });
    return response;
}