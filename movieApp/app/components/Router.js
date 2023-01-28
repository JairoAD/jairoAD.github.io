import { ajax } from "https://jairoad.github.io/movieApp/app/helpers/ajax.js";
import api from "https://jairoad.github.io/movieApp/app/helpers/api.js";
import { Movie } from "https://jairoad.github.io/movieApp/app/components/Movie.js";
import { MovieCard } from "https://jairoad.github.io/movieApp/app/components/MovieCard.js";
import { SortOptions } from "https://jairoad.github.io/movieApp/app/components/SortOptions.js";

export async function Router() {
    SortOptions();
    let { hash } = location;
    console.log(hash);

    const $main = document.getElementById("main");
    $main.innerHTML = null;
    if (!hash || hash === "#/" || hash === "#/popular") {
        await ajax({
            url: api.POPULAR_MOVIES,
            cbSuccess: (movies) => {
                let moviesResult = movies.results;
                console.log(moviesResult);
                console.log(movies);
                let html = "";
                movies.results.forEach((el) => html += MovieCard(el));
                document.querySelector(".search-form").style.display = "none";
                document.querySelector(".loader").style.display = "none";
                $main.innerHTML = html;
            },
        });
    } else if(hash === "#/top"){
        await ajax({
            url: api.TOP_RATED_MOVIES,
            cbSuccess: (movies) => {
                let moviesResult = movies.results;
                console.log(moviesResult);
                console.log(movies);
                let html = "";
                movies.results.forEach((el) => html += MovieCard(el));
                document.querySelector(".loader").style.display = "none";
                document.querySelector(".search-form").style.display = "none";
                $main.innerHTML = html;
            },
        });
    } else if (hash.includes("#/search")) {
        let query = localStorage.getItem("apiSearch");

        //document.querySelector(".banner").style.display = "none";
        document.querySelector(".options").style.display = "none"
        if (!query) {
            document.querySelector(".loader").style.display = "none";
            return false;
        }

        await ajax({
            url: `${api.SEARCH}${query}`,
            cbSuccess: (search) => {
                let searchResults = search.results;
                console.log(search);
                let html = "";
                if (searchResults.length === 0) {
                    html = `
                    <p class="error">
                        Search not found for <mark>${query}</mark>
                    </p>
                    `;
                } else {
                    searchResults.forEach((el) => html += MovieCard(el));
                    document.querySelector(".loader").style.display = "none";
                }
                $main.innerHTML = html;
            }
        });

    } else {
        await ajax({
            url: `${api.MOVIE_INFO}${localStorage.getItem("apiMovieID")}?api_key=${api.API_KEY}&language=en-US`,
            cbSuccess: (movie) => {
                console.log(movie);
                $main.innerHTML = Movie(movie);
            },
        });
        document.querySelector(".banner").style.display = "none";
        document.querySelector(".options").style.display = "none";

    }

    document.querySelector(".loader").style.display = "none";

}