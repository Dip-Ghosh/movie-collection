
import { APIURL, IMGPATH } from "./env.js";

const main = document.getElementById("main");

const getMovies = async () => {
    const resp = await fetch(APIURL);
    const respData = await resp.json();
    showMovies(respData.results);
}


const showMovies = (movies) => {

    main.innerHTML = "";
    movies.map((movie) => {
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `<div class="card mb-12 rounded-3 shadow-sm ">
                                    <img class="image-responsive" src="${IMGPATH + movie.poster_path}" alt="${movie.title}" class="card-img-top">
                             </div>
                            <div class="overview">
                                      <span class="card-title pricing-card-title">
                                        <h3>Title : ${ movie.title } </h3>
                                         <h5>Rating : ${ movie.vote_average }</h5><span class="${getClassByRate(movie.vote_average)}"></span>
                                      </span>
                                      <h5 class="mt-1">Overview:</h5>  ${movie.overview}
                             </div>
                             `;

        main.appendChild(movieEl);
    })
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
}

document.addEventListener('DOMContentLoaded', getMovies);

export { showMovies }

