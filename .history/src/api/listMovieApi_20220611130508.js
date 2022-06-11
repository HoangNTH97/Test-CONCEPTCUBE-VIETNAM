import axiosClient from './axiosClient';

const listMovieApi = {
    getAll(params) {
        const url = '/list_movies.json';
        return axiosClient.get(url, {
            params,
        });
    },
};

export default listMovieApi;
