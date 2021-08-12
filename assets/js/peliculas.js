
let numeroRandom = Math.floor((Math.random() * (600 - 0 + 1)) + 0);
const PELICULARANDOM = "https://api.themoviedb.org/3/movie/"+numeroRandom+"?api_key=863993d06672d00c648f307c359623ff"


$.getJSON(PELICULARANDOM, function (respuesta, estado) {
    if(estado === "success"){
        let peliculaRandomJSON =  respuesta
        localStorage.setItem("peliRandom", JSON.stringify(peliculaRandomJSON))
    }
});
