import axios from 'axios'
import { FormData } from './FormSlice'

export const postFormData = (data:FormData) =>{
    return axios.post('http://localhost:5000/api/contact',data)
}