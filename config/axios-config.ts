import axios from 'axios'

const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
});

api.defaults.headers.common["Authorization"] = `${process.env.NEXT_PUBLIC_JWT}`

export default api
