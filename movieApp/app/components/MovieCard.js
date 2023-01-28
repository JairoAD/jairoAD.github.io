export function MovieCard(props) {
    let { title, vote_average, poster_path, id } = props;
    let poster = `https://www.themoviedb.org/t/p/original${poster_path}`;

    document.addEventListener("click", e => {
        if (e.target.matches(".movie-card ")) return false;
        localStorage.setItem("apiMovieID", e.target.dataset.id);
    })

    let moviePoster;
    if(poster_path == null) moviePoster = "https://jairoad.github.io/movieApp/app/assets/default_poster.png";
    else moviePoster = poster;
     
    return `
        <article class="movie-card">
            <img src="${moviePoster}" alt="">
            <div class="movie-title">
                <h2>${title}</h2>
                <span><i class="fa-solid fa-star"></i>${vote_average}</span>
                <a href="#/${title}" data-id="${id}">See details</a>
            </div>
            
        </article>
    `;
}