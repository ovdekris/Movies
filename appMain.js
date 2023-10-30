const API_KEY="97edb5dc-4a44-4e65-b400-4c28361f3282";
const API_URL_POPULAR="https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
getMovies(API_URL_POPULAR);
async function getMovies(url){
    const resp=await fetch(url,{
        headers:{
            "Content-Type":"aplication/json",
            "X-API-KEY":API_KEY
        }
    })
    const respData= await resp.json();
    console.log(respData);
    showMovies(respData);
}
function showMovies(data){
    let moviesEl= document.querySelector(".movies");
    ///очистка од предыдущих фильмов
    document.querySelector(".movies").innerHTML="";
    data.films.forEach(movie=>{
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        movieEl.innerHTML=`<div class="mover__cover__inner">
                <img src="${movie.posterUrlPreview}" alt="${movie.nameRu}" class="movie__cover">
            <div class="movie__cover--darkened"></div>
            </div>
            <div class="movie__info">
            <div class="movie__title">${movie.nameRu}</div>
            <div class="movie__category">${movie.genres.map(genre=>`${genre.genre}`)}</div>
            <div class="movie__average movie__avarage__green">${movie.rating}</div>`;
        moviesEl.appendChild(movieEl);
    })
}