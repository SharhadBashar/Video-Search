import axios from 'axios';

const KEY = 'AIzaSyD8NRhhsgJTzdoRGi1ABa_eRLPDl8csq0s';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
});