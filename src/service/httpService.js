import axios from 'axios'
import { toast } from 'react-toastify';

axios.defaults.headers.post["Content-Type"] = "application/json"
// axios.defaults.headers.common["rapidapi-key"] = `ef893adf76mshe6a9fbb23b3227dp1a42b9jsn23598b0bcc3f`;

axios.interceptors.response.use(null, error => {
    const exepctedErrors = error.response &&
        error.response.status >= 400 &&
        error.response.status < 500

    if (!exepctedErrors) {
        console.log(error);
        toast.error("مشکلی از سمت سرور رخ داده است", {
            position: "bottom-right",
            closeOnClick: true
        });
    }

    return Promise.reject(error)
})

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}