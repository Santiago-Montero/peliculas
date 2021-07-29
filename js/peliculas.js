

const PELICULASJSON = "../json/peliculas.json"

$.getJSON(PELICULASJSON, function (respuesta, estado) {
    if(estado === "success"){
        let peliculasJSON = respuesta    
        localStorage.setItem("arrayPeliculas", JSON.stringify(peliculasJSON))
    }
});

const CATEGORIASJSON = "../json/categorias.json"

$.getJSON(CATEGORIASJSON, function (respuesta, estado) {
    if(estado === "success"){
        let categoriasJSON = respuesta    
        localStorage.setItem("arrayCategorias", JSON.stringify(categoriasJSON))
    }
});

