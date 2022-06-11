import axiosClient from './axiosClient';

const listMovieApi = {
    getAll() {
        const url = 'list_movies.json';
        return axiosClient.get(url);
    },
};

export default listMovieApi;
