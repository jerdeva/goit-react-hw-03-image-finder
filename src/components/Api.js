import axios from 'axios';


axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '39280024-15c0ff0926507938cba5ebc7e';

export const perPage = 20;

export const fetchApi = async (query, page) => {
    const resp = await axios.get(`?q=${query}t&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`);
    return resp.data
}

