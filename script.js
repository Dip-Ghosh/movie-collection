
// initially get fav movies
getMovies(APIURL);

const pagination = (movies) => {
    const page = movies.page;
    const totalPages = movies.total_pages;

    const pagination = document.getElementById('pagination');




    for( let i =1; i < totalPages; i++) {
        const ulElement = document.createElement('ul');
        ulElement.classList.add('pagination');
        ulElement.classList.add('justify-content-center');
        ulElement.innerHTML = `<li class="page-item"><a class="page-link" href="#"> ${ i } </a></li>`;
        pagination.appendChild(ulElement);
    }

}

// <div className="movie-info">
//     <h3>${title}</h3>
//     <span className="${getClassByRate(
//                     vote_average
//                 )}">${vote_average}</span>
// </div>
// <div className="overview">
//     <h3>Overview:</h3>
//     ${overview}
// </div>


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        getMovies(SEARCHAPI + searchTerm);

        search.value = "";
    }
});
