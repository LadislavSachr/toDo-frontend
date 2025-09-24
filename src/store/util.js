const base = import.meta.env.VITE_API_URL;

export const getTasks = async () => {
    const response = await fetch(base+'/tasks',{
        method: 'GET',
        credentials: 'include'
    })
    if(response.ok){
        const json = await response.json();
        return json;
    }else{
        return new Error("Soemthing went wrong!");
    }
}

export const maxId = (array) => {
    if(array.length===0){
        return 0;
    }else{
        return array[array.length-1].task_id;
    }
}