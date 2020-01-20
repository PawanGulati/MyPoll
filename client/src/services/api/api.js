import Axios from "axios";

// Axios calling function
export const call = async(method,path,data) =>{
    try {
        const response = await Axios[method](`/${path}`,data)
        return response.data
    } catch (err) {
        console.log(err);
    }
}

//Axios setHeader function
export const setToken = (token)=>{
    if(token){
        Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }else{
        delete Axios.defaults.headers.common['Authorization']
    }
}
