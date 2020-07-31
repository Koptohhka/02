import { API_KEY } from '../constants/constants';

const getFilmDataById = async (id) => {
    try {
        const rawResponse = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
        const data = await rawResponse.json();
        return data;
    } catch {
        return false;
    }
};

const getFilmsDataByTitle = async (title, pageNumber = 1) => {
    try {
        const rawResponse = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=${API_KEY}&page=${pageNumber}`);
        const data = await rawResponse.json();
        return data;
    } catch {
        return false;
    }
}

export { getFilmDataById, getFilmsDataByTitle };