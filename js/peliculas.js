

const PELICULASJSON = "./js/peliculas.json"

$.getJSON(PELICULASJSON, function (respuesta, estado) {
    if(estado === "success"){
        let peliculasJSON = respuesta    
        localStorage.setItem("arrayPeliculas", JSON.stringify(peliculasJSON))
    }
});

const CATEGORIASJSON = "./js/categorias.json"

$.getJSON(CATEGORIASJSON, function (respuesta, estado) {
    if(estado === "success"){
        let categoriasJSON = respuesta    
        localStorage.setItem("arrayCategorias", JSON.stringify(categoriasJSON))
    }
});

