const base = import.meta.env.VITE_API_URL;

// method to fetch a new task to our database
export const addTaskAPI = async (task) =>{
    const response = await fetch(base+'/tasks',{
        method: 'POST',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
    return response;
}

// method to fetch a task deletion from our database
export const deleteTaskAPI = async (taskId) =>{
    const response = await fetch(base+'/tasks/'+taskId,{
        method: 'DELETE',
        credentials: 'include'
    })
    return response;
}