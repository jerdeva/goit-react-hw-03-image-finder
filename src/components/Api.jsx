import axios from 'axios';


axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '39280024-15c0ff0926507938cba5ebc7e';
const imageType = 'photo';
const orientation = 'horizontal';
const perPage = 12;

export const fetchImages = async (query, page) => {
    const img = await axios.get(`?q=${query}&page=${page}&key=${API_KEY}&image_type=${imageType}&orientation=${orientation}&per_page=${perPage}`) 

    return img.data
}

