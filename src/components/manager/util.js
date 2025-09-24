const base = import.meta.env.VITE_API_URL;

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

export const deleteTaskAPI = async (taskId) =>{
    const response = await fetch(base+'/tasks/'+taskId,{
        method: 'DELETE',
        credentials: 'include'
    })
    return response;
}