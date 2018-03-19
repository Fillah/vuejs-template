import axios from 'axios'
const axiosinstance = axios.create()
axiosinstance.interceptors.request.use(
    function (config) {
        config.baseURL = 'https://localhost:44300'
        config.withCredentials = true
        config.headers.Authorization = window['userCredentials']
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

export default {
    get (url, request) {
        return axiosinstance.get(url, request)
            .then((response) => Promise.resolve(response.body.data))
            .catch((error) => Promise.reject(error))
    },
    post (url, request) {
        return axiosinstance.post(url, request)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error))
    },
    patch (url, request) {
        return axiosinstance.patch(url, request)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error))
    },
    delete (url, request) {
        return axiosinstance.delete(url, request)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error))
    }
}