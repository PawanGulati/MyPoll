import Axios from "axios";

// Axios calling function
export const call = async (method, path, data) => {
    
        const response = await Axios[method](`/api/${path}`, data)
        // console.log(response.data);

        return response.data
}

//Axios setHeader function
export const setToken = (token) => {
    if (token) {
        Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete Axios.defaults.headers.common['Authorization']
    }
}

export default {
    call,
    setToken
}