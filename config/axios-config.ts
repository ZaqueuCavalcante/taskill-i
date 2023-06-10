import axios from 'axios';

const axs = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
});

axs.defaults.headers.common["Authorization"] = `${process.env.NEXT_PUBLIC_JWT}`

export default axs;
