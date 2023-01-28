import { MovieCard } from "https://jairoad.github.io/movieApp/app/components/MovieCard.js";
import { ajax } from "https://jairoad.github.io/movieApp/app/helpers/ajax.js";
import api from "https://jairoad.github.io/movieApp/app/helpers/api.js";

export async function infiniteScroll() {
    let query = localStorage.getItem("apiSearch");
    let apiURL, Component;

    window.addEventListener("scroll", async (e) => {
        let { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        let { hash } = window.location;
        //console.log(scrollTop,scrollHeight,clientHeight);

        if (scrollTop + clientHeight >= scrollHeight) {
            api.page++;

            if (!hash || hash === `#/` || hash === "#/popular") {
                apiURL = `${api.POPULAR_MOVIES}${api.page}`;
                Component = MovieCard;
            } else if (hash === "#/top") {
                apiURL = `${api.TOP_RATED_MOVIES}${api.page}`;
                Component = MovieCard;
            } else if (hash.includes("#/search") && hash.includes(query)) {
                apiURL = `${api.SEARCH}${query}&page=${api.page}`;
                Component = MovieCard;
            } else {
                return false;
            }

            document.querySelector(".loader").style.display = "block";

            await ajax({
                url: apiURL,
                cbSuccess: (movies) => {
                    let moviesResult = movies.results;
                    //console.log(moviesResult);
                    let html = "";
                    moviesResult.forEach(e => html += Component(e));
                    document.getElementById("main").insertAdjacentHTML("beforeend", html);
                    document.querySelector(".loader").style.display = "none";
                }
            });
        }
    });
}