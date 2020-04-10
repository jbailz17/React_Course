import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-course-90e3d.firebaseio.com/'
});

export default instance;