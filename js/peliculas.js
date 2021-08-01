const PELICULASJSON = "/js/peliculas.json"
const CATEGORIASJSON = "/js/categorias.json"
$.getJSON(PELICULASJSON, function (respuesta, estado) {
    if(estado === "success"){
        peliculasJSON = respuesta    
        localStorage.setItem("arrayPeliculas", JSON.stringify(peliculasJSON))
    }
});

$.getJSON(CATEGORIASJSON, function (respuesta, estado) {
    if(estado === "success"){
        let categoriasJSON = respuesta    
        localStorage.setItem("arrayCategorias", JSON.stringify(categoriasJSON))
    }
});


