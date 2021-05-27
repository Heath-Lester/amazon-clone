import axios from "axios"

const instance = axios.create({
    baseURL: 'https://us-central1-challenge-60876.cloudfunctions.net/api'
    // baseURL: 'http://127.0.0.1:5001/challenge-60876/us-central1/api'
})


export default instance