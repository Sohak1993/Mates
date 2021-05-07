import * as axios from 'axios'

const apiMates = axios.create({
    baseURL: 'http://localhost:4000/api'
})

export default apiMates