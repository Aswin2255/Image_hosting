import axios from 'axios'
import Axios from 'axios'
const baseURL = 'http://localhost:5000/'
 const instance =  axios.create({
    baseURL:baseURL,
    withCredentials:true
})
export default instance