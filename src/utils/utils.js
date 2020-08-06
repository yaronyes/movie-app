import axios from 'axios';

export const loadActors = async () => {
    try {
        return await axios.get("actors.json");    
    } catch (e) {
        console.log(e);
    }    
};

const api_key = '534b88fc1310cfa57ec88bf791f97edd';

export const searchActorAndGetId = async (actorName) => {
    try {
        const url = `https://api.themoviedb.org/3/search/person?api_key=${api_key}&language=en-US&query=${actorName}&page=1&include_adult=false`;
        const res = await axios.get(url);
        return res.data.results[0].id;
    } catch (e) {
        console.log(e);
    }
};

export const getMoviesForActor = async (id) => {
    try {
        const url = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${api_key}&language=en-US`;
        return await axios.get(url);
    } catch (e) {
        console.log(e);
    }
};

export const getMovie = async (id) => {
    try {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`;
        return await axios.get(url);
    } catch (e) {
        console.log(e);
    }
};

export const getMovieCredits = async (id) => {
    try {        
        const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`;
        return await axios.get(url);
    } catch (e) {
        console.log(e);
    }
};