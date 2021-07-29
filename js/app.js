let arrayConPeliculas = []
let miLista = []
let peliculas = JSON.parse(localStorage.getItem("arrayPeliculas"))
let categorias = JSON.parse(localStorage.getItem("arrayCategorias"))

let inicio = document.getElementById("btnInicio");
let home = document.getElementById("home");
let categoriasLista = document.getElementById("categorias");
let barraBusqueda = document.getElementById("barra");
let botonBusqueda = document.getElementById("btnBusqueda");
let botonMiLista = document.getElementById("btnMiLista");
let contenedorTodasLasPeliculas = document.createElement("div");
let contenedorCategorias = document.createElement("div");
let contenedorBuscarPelicula = document.createElement("div");
let contenedorPeliculasMilista = document.createElement("div");

let todasLasPeliculas = () =>{
    if(lugarInicio == false){
        contenedorTodasLasPeliculas.style.display = "block";
        contenedorCategorias.style.display = "none";
        contenedorBuscarPelicula.style.display = "none";
        contenedorPeliculasMilista.style.display = "none";
        contenedorTodasLasPeliculas.innerHTML = `<div class="contenedorPeliculasTitulo">
                                                    <h2>Todas las Peliculas <hr></h2>
                                                </div>
                                                <div id="peliculas" class="contenedorPeliculas"></div>`;
        home.appendChild(contenedorTodasLasPeliculas)
        let peliculasContenedor = document.getElementById("peliculas"); // <div id="peliculas" class="contenedorPeliculas"></div>
        for (const peli of peliculas){
            let todasLasPeliculas = document.createElement("div");
            todasLasPeliculas.setAttribute("id", "contenedorTodasLasPeliculas");
            todasLasPeliculas.setAttribute("class", "contenedor");
            todasLasPeliculas.innerHTML = `<div id= "${peli.id}" class="contenedorPeli">
                                                <img src="${peli.img}" class="contenedorPeliImg" alt="${peli.nombre}">
                                                <div class="masInfo"> 
                                                <p>${peli.nombre}</p> 
                                                    <div class="masInfoBtn">
                                                        <button onclick="agregarAmiLista(${peli.id})">+</button>
                                                    </div>
                                                </div>
                                                <div class="masInfoTexto">
                                                        <p>Genero: ${peli.genero}</p>
                                                        <p>Anio Estreno: ${peli.anio}</p>
                                                </div>
                                            </div>`
            peliculasContenedor.appendChild(todasLasPeliculas)
        }
    }else{
        alert("inicia sesion para navegar por la pagina")
    }
}
let cargarCategorias = () =>{
    for(const cate of categorias){
        let liCategorias = document.createElement("li");
        liCategorias.setAttribute("class","dropdown-item");
        liCategorias.innerHTML = `<a id=${cate.genero} onclick="mostrarCategoria(${cate.genero})">${cate.nombre}</a>`
        categoriasLista.appendChild(liCategorias)
    }
}
let mostrarCategoria = (generoSeleccionado) =>{
    if(lugarInicio == false){
        contenedorTodasLasPeliculas.style.display = "none";
        contenedorCategorias.style.display = "block";
        contenedorBuscarPelicula.style.display = "none";
        contenedorPeliculasMilista.style.display = "none";
        contenedorCategorias.innerHTML = `<div id="contenedorPeliculasCategoria" class="contenedor">
                                            <div class="contenedorPeliculasTitulo">
                                            <h2> Categoria <hr></h2>
                                            </div>
                                            <div id="peliculasCategoria" class="contenedorPeliculas"></div>
                                        </div>`;
        home.appendChild(contenedorCategorias)
        let peliculasCategoria = document.getElementById("peliculasCategoria")
        let filtradas = peliculas.filter(e => e.genero == generoSeleccionado.id)
        if( filtradas !== null){
            for (let i = 0; i < filtradas.length; i++){
                let peliculasFiltradas = document.createElement("div");
                peliculasFiltradas.setAttribute("id", "contenedorPeliculasCategoria");
                peliculasFiltradas.setAttribute("class", "contenedor");
                peliculasFiltradas.innerHTML = (`<div class="contenedorPeli">
                                                    <img src="${filtradas[i].img}" class="contenedorPeliImg" alt="${filtradas[i].nombre}">
                                                    <div class="masInfo"> 
                                                        <p>${filtradas[i].nombre}</p> 
                                                        <div class="masInfoBtn">
                                                            <button onclick="agregarAmiLista(${filtradas[i].id})">+</button>
                                                        </div>
                                                    </div>
                                                    <p>Genero: ${filtradas[i].genero}</p>
                                                    <p>Anio Estreno: ${filtradas[i].anio}</p>
                                                </div>`)
                peliculasCategoria.appendChild(peliculasFiltradas);
            }
        }
    }else{
        alert("inicia sesion para navegar por la pagina")
    }
}
let buscarPelicula = () =>{
    let peliculaBuscada = document.getElementById("barra").value
    peliculaBuscada = peliculaBuscada.toLowerCase();
    if(peliculaBuscada){
        contenedorTodasLasPeliculas.style.display = "none";
        contenedorCategorias.style.display = "none";
        contenedorBuscarPelicula.style.display = "block";
        contenedorPeliculasMilista.style.display = "none";
        contenedorBuscarPelicula.innerHTML = `<div id= "contenedorPeliculaBuscada" class="contenedor">
                                                <div class="contenedorPeliculasTitulo">
                                                    <h2>Resultados de la Busqueda <hr></h2>
                                                </div>
                                                <div id="peliculas2" class="contenedorPeliculas"></div>
                                            </div>`;
        home.appendChild(contenedorBuscarPelicula)
        let peliculasContenedor2 = document.getElementById("peliculas2");
        let encontrada = peliculas.find(peli => peli.busqueda === peliculaBuscada)
        if(encontrada !== undefined){
            arrayConPeliculas.push(encontrada)
            for (const peli of arrayConPeliculas){
                let peliculaEncontrada = document.createElement("div");
                peliculaEncontrada.setAttribute("id", "contenedorPeliculaBuscada");
                peliculaEncontrada.setAttribute("class", "contenedor");
                peliculaEncontrada.innerHTML = `<div id="${peli.id}" class="contenedorPeli">
                                                            <img src="${peli.img}" class="contenedorPeliImg" alt="${peli.nombre}">
                                                            <div class="masInfo"> 
                                                            <p>${peli.nombre}</p> 
                                                                <div class="masInfoBtn">
                                                                    <button onclick="agregarAmiLista(${peli.id})">+</button>
                                                                </div>
                                                            </div>
                                                            <p>Genero: ${peli.genero}</p>
                                                            <p>Anio Estreno: ${peli.anio}</p>
                                                        </div>`
                peliculasContenedor2.appendChild(peliculaEncontrada);
            }
        }else{
            contenedorBuscarPelicula.innerHTML = `<div id= "contenedorPeliculaBuscada" class="contenedor">
                                                    <div class="contenedorPeliculasTitulo">
                                                        <h2>Busqueda no encontrada <hr></h2>
                                                    </div>
                                                </div>`;
        home.appendChild(contenedorBuscarPelicula)
        }
    }else{
        alert("inicia sesion para navegar por la pagina")
    }
}
let agregarAmiLista = (idLista) =>{
    let peliAlistada = peliculas.filter(e => e.id == idLista)
    miLista.push(peliAlistada[0])
}
let mostrarMiLista = () =>{
    if(lugarInicio == false){
        contenedorTodasLasPeliculas.style.display = "none";
        contenedorCategorias.style.display = "none";
        contenedorBuscarPelicula.style.display = "none";
        contenedorPeliculasMilista.style.display = "block";
        contenedorPeliculasMilista.innerHTML = `<div id="contenedorPeliculasMilista" class="contenedor">
                                                    <div class="contenedorPeliculasTitulo" id="contenedorMilista">
                                                        <h2>Mi Lista <hr></h2>
                                                    </div>
                                                    <div id="miLista" class="contenedorPeliculas"></div>
                                                </div>`;
        home.appendChild(contenedorPeliculasMilista)
        let miListaContenedor = document.getElementById("miLista")
        if (miLista !== null){
            for(const peli of miLista){
                let peliculaEnMiLista = document.createElement("div");
                peliculaEnMiLista.setAttribute("id", "contenedorPeliculasMilista");
                peliculaEnMiLista.setAttribute("class", "contenedor");
                peliculaEnMiLista.innerHTML =`<div class="contenedorPeli">
                                                <img src="${peli.img}" class="contenedorPeliImg" alt="${peli.nombre}">
                                                <div class="masInfo"> 
                                                    <p>${peli.nombre}</p> 
                                                    <div class="masInfoBtn">
                                                        <button onclick="agregarAmiLista(${peli.id})">+</button>
                                                    </div>
                                                </div>
                                                <p>Genero: ${peli.genero}</p>
                                                <p>Anio Estreno: ${peli.anio}</p>
                                            </div> `
                miListaContenedor.appendChild(peliculaEnMiLista);
            }
        }
    }else{
        alert("inicia sesion para navegar por la pagina")
    }
}


inicio.addEventListener("click", todasLasPeliculas)
botonBusqueda.addEventListener("click", buscarPelicula);
botonMiLista.addEventListener("click", mostrarMiLista);

cargarCategorias();

