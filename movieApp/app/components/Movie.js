
export function Movie(props) {
    let { title, overview, runtime, poster_path, release_date, id } = props;
    let poster = `https://www.themoviedb.org/t/p/original${poster_path}`;

    let moviePoster;
    if(poster_path == null) moviePoster = "https://jairoad.github.io/movieApp/app/assets/default_poster.png";
    else moviePoster = poster;

    return `
        <section class="movie-page">
            <div class="movie-img">
                <img src="${moviePoster}" alt="${title}">
            </div>
            <section class="movie-info">
                <div class="title">
                    <h2>${title}</h2>
                </div>
                <div class="info">
                    <h4>Runtime: ${runtime}m</h4>
                    <h4>Release Date: ${release_date}</h4>
                </div>
                <article>${overview}</article>
            </section>
            
        </section>
    `;
}