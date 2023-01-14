
import {SEARCHAPI} from "./env.js";
import {showMovies} from "./show.js";

const form = document.getElementById("form");
const search = document.getElementById("search");


const getMoviesByName = async (searchTerm) => {

    const resp = await fetch(SEARCHAPI + searchTerm );
    const respData = await resp.json();
    showMovies(respData.results);
}

const filter = (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if (searchTerm) {
        getMoviesByName(searchTerm);
        search.value = "";
    }
}
form.addEventListener("submit", filter);

export {filter}