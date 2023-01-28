let page = 1;

const BASE_URL = `https://api.themoviedb.org/3/`;
const API_KEY = `34c71ffb54c4d3b70e2e740f1f6ebd8a`;
const SEARCH = `${BASE_URL}search/movie?api_key=${API_KEY}&query=`;
const POPULAR_MOVIES = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=`;
const TOP_RATED_MOVIES = `${BASE_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=`
const MOVIE_INFO = `${BASE_URL}movie/`;

//GET MOVIE INFO
//`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`

//GET MOVIE BY SEARCHING
//https://api.themoviedb.org/3/search/movie?api_key=<APIKEY>&query=<keyword>

//GET POPULAR MOVIES
//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

//GET TOP RATED MOVIES
//https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1

export default {
    BASE_URL,
    API_KEY,
    SEARCH,
    POPULAR_MOVIES,
    TOP_RATED_MOVIES,
    MOVIE_INFO,
    page,
}