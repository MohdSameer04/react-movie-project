import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjEwODkxNDQ4YzllMjRlZmY3NTg1MGZlMjIwZGI2MiIsInN1YiI6IjY2NjAwOTg3MmJlOGZkZDIwZjU3NTEyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZKqLGNJyRNvC88QuRnw2ez30M8ZL8iq4TJqDvXUjnaQ";


const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
