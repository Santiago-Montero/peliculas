let arrayConPeliculas = []
let miLista = []
// let peliculas  = JSON.parse(localStorage.getItem("arrayPeliculas"))
// let categorias = JSON.parse(localStorage.getItem("arrayCategorias"))
let categorias = [
    {genero: "accion", nombre : "Accion"},
    {genero: "animacion", nombre : "Animacion"},
    {genero: "aventura", nombre : "Aventura"},
    {genero: "cienciaficcion", nombre : "Ciencia ficcion"},
    {genero: "comedia", nombre : "Comedia"},
    {genero: "drama", nombre : "Drama"},
    {genero: "terror", nombre : "Terror"}
]

let peliculas = [
    {id:1, nombre: 'Star Wars',busqueda :'star wars', genero: 'cienciaficcion', anio: 1977, atp: true, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625508101/afterclass/ahT4ObS7XKedQkOSpGr1wQ97aKA_s86oek.jpg'},
    {id:2, nombre: 'Nobody',busqueda :'nobody', genero: 'accion', anio: 2021, atp: false, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625508101/afterclass/ddO5a3tMPpQutSDQO1bESgLWadB_nsr7h6.jpg'},
    {id:3, nombre: 'Mortal Kombat',busqueda :'mortal kombat', genero: 'aventura', anio: 2021, atp: false, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625508102/afterclass/t2GbiMJfO8txoihdJC8RsfK1ds7_e9o7v4.jpg'},
    {id:4, nombre: 'Interstellar',busqueda :'interstellar', genero: 'cienciaficcion', anio: 2014, atp: false, img: 'https://res.cloudinary.com/vaporbox/image/upload/v1625508102/afterclass/nrSaXF39nDfAAeLKksRCyvSzI2a_hvgguc.jpg'},
    {id:5, nombre: 'The Big Lebowsky',busqueda :'the big lebowsky', genero: 'comedia', anio: 1998, atp: false, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625508101/afterclass/EJFkJD9BH400jfzKz3W5xLYHQa_ic29jw.jpg'},
    {id:6, nombre: 'Mulan',busqueda :'mulan', genero: 'aventura', anio: 2020, atp: true, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625508101/afterclass/72XYwdIugXnjHxS6upI6U0yeTBU_lk2u9w.jpg' },
    {id:7, nombre: 'A Quiet Place',busqueda :'a quiet place', genero: 'terror', anio: 2018, atp: false, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625508101/afterclass/5pairI20KJs1SEa4Z8yAsPR779m_a9uwch.jpg'},
    {id:8, nombre: 'The Exorcist',busqueda :'the exorcist', genero: 'terror', anio: 1973, atp: false, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625508103/afterclass/rQU3sOBms4WA7iFAqBCtbMXgaB8_ynkkix.jpg'},
    {id:9, nombre: 'SpongeBob',busqueda :'spongebob', genero: 'animacion', anio: 2020, atp: true, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625508102/afterclass/fi2pg2mtAZwhq3qVuAs6PztjnHT_hbdv35.jpg'},
    {id:10, nombre: 'Luca',busqueda :'luca' , genero: 'animacion', anio: 2020, atp: true, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625540511/afterclass/pr06RihHOGE3waZQx5fs2WYUdwr_a7dvh2.jpg'},
    {id:11, nombre: 'Spirit',busqueda :'spirit', genero: 'animacion', anio: 2021, atp: true, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625540564/afterclass/mptEtOkw906BJuD9rRUKG5sr5E9_s43aw0.jpg'},
    {id:12, nombre: 'Monster Inc.',busqueda :'monster inc', genero: 'animacion', anio: 2001, atp: true, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625540669/afterclass/jTE3BLVCpYaR71L2U8SHV22HvEr_fbtiu6.jpg'},
    {id:13, nombre: 'Blade Runner',busqueda :'blade runner', genero: 'cienciaficcion', anio: 1982, atp: false, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625540759/afterclass/k7tpmwwSqwJ6l1f1FqDMnM7x5c2_tgukok.jpg'},
    {id:14, nombre: 'Joker',busqueda :'joker', genero: 'drama', anio: 2019, atp: false, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625540959/afterclass/v0eQLbzT6sWelfApuYsEkYpzufl_e85kyq.jpg'},
    {id:15, nombre: 'Rey León',busqueda :'rey leon', genero: 'animacion', anio: 1994, atp: true, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625541034/afterclass/b0MxU37dNmMwKtoPVYPKOZSIrIn_xx4f3x.jpg'},
    {id:16, nombre: 'Jurassic Park',busqueda :' jurassic park', genero: 'cienciaficcion', anio: 1993, atp: false, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625541181/afterclass/1r8TWaAExHbFRzyqT3Vcbq1XZQb_jotm6u.jpg'},
]

let inicio = document.getElementById("btnInicio");
let home = document.getElementById("home");
let peliRandom = document.getElementById("btnRandom");
let categoriasLista = document.getElementById("categorias");
let barraBusqueda = document.getElementById("barra");
let botonBusqueda = document.getElementById("btnBusqueda");
let botonMiLista = document.getElementById("btnMiLista");
let contenedorTodasLasPeliculas = document.createElement("div");
let contenedorCategorias = document.createElement("div");
let contenedorBuscarPelicula = document.createElement("div");
let contenedorPeliculasMilista = document.createElement("div");
let contenedorPeliculaRandom = document.createElement("div");

let todasLasPeliculas = () =>{
    if(lugarInicio == false){
        contenedorTodasLasPeliculas.style.display = "block";
        contenedorCategorias.style.display = "none";
        contenedorBuscarPelicula.style.display = "none";
        contenedorPeliculasMilista.style.display = "none";
        contenedorPeliculaRandom.style.display = "none";
        contenedorTodasLasPeliculas.innerHTML = `<div class="contenedorPeliculasTitulo contenedor"">
                                                    <h2>Todas las Peliculas <hr></h2>
                                                </div>
                                                <div id="peliculas" class="contenedorPeliculas"></div>`;
        home.appendChild(contenedorTodasLasPeliculas)
        let peliculasContenedor = document.getElementById("peliculas"); // <div id="peliculas" class="contenedorPeliculas"></div>
        if(peliculas){
            for (const peli of peliculas){
                let todasLasPeliculas = document.createElement("div");
                todasLasPeliculas.setAttribute("id", "contenedorTodasLasPeliculas");
                todasLasPeliculas.setAttribute("class", "contenedor");
                todasLasPeliculas.innerHTML = `<div id= "${peli.id}" class="contenedorPeli">
                                                    <img src="${peli.img}" class="contenedorPeliImg" alt="${peli.nombre}">
                                                    <div class="contenedorInfo">
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
                                                    </div>
                                                </div>`
                peliculasContenedor.appendChild(todasLasPeliculas)
            }
        }
    }else{
            alert("inicia sesion para navegar por la pagina")
        }
}
let cargarCategorias = () =>{
    if(categorias){
        for(const cate of categorias){
            let liCategorias = document.createElement("li");
            liCategorias.setAttribute("class","dropdown-item");
            liCategorias.innerHTML = `<a id=${cate.genero} onclick="mostrarCategoria(${cate.genero})">${cate.nombre}</a>`
            categoriasLista.appendChild(liCategorias)
        }
    }
}
let mostrarCategoria = (generoSeleccionado) =>{
    if(lugarInicio == false){
        contenedorTodasLasPeliculas.style.display = "none";
        contenedorCategorias.style.display = "block";
        contenedorBuscarPelicula.style.display = "none";
        contenedorPeliculasMilista.style.display = "none";
        contenedorPeliculaRandom.style.display = "none";
        contenedorCategorias.innerHTML = `<div id="contenedorPeliculasCategoria" class="contenedor">
                                            <div class="contenedorPeliculasTitulo">
                                            <h2> Categoria <hr></h2>
                                            </div>
                                            <div id="peliculasCategoria" class="contenedorPeliculas"></div>
                                        </div>`;
        home.appendChild(contenedorCategorias)
        let peliculasCategoria = document.getElementById("peliculasCategoria")
        let filtradas = peliculas.filter(e => e.genero == generoSeleccionado.id)
        if(filtradas){
            for (let i = 0; i < filtradas.length; i++){
                let peliculasFiltradas = document.createElement("div");
                peliculasFiltradas.setAttribute("id", "contenedorPeliculasCategoria");
                peliculasFiltradas.setAttribute("class", "contenedor");
                peliculasFiltradas.innerHTML = (`<div id= "${filtradas[i].id}" class="contenedorPeli">
                                                    <img src="${filtradas[i].img}" class="contenedorPeliImg" alt="${filtradas[i].nombre}">
                                                    <div class="contenedorInfo">
                                                        <div class="masInfo"> 
                                                            <p>${filtradas[i].nombre}</p> 
                                                            <div class="masInfoBtn">
                                                                <button onclick="agregarAmiLista(${filtradas[i].id})">+</button>
                                                            </div>
                                                        </div>
                                                        <div class="masInfoTexto">
                                                            <p>Genero: ${filtradas[i].genero}</p>
                                                            <p>Anio Estreno: ${filtradas[i].anio}</p>
                                                        </div>
                                                    </div>
                                                </div>`)
                peliculasCategoria.appendChild(peliculasFiltradas);
            }
        }
    }else{
        alert("inicia sesion para navegar por la pagina")
    }
    
}

let buscarPelicula = () =>{
    if(lugarInicio == false){
        let peliculaBuscada = document.getElementById("barra").value
        peliculaBuscada = peliculaBuscada.toLowerCase();
        console.log(peliculaBuscada)
        if(peliculaBuscada){
            contenedorTodasLasPeliculas.style.display = "none";
            contenedorCategorias.style.display = "none";
            contenedorBuscarPelicula.style.display = "block";
            contenedorPeliculasMilista.style.display = "none";
            contenedorPeliculaRandom.style.display = "none";
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
                    peliculaEncontrada.innerHTML = `<div id= "${peli.id}" class="contenedorPeli">
                                                        <img src="${peli.img}" class="contenedorPeliImg" alt="${peli.nombre}">
                                                        <div class="contenedorInfo">
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
                                                        </div>
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
        }
    }else{
        alert("inicia sesion para navegar por la pagina")
    }
    contenedorCategorias.remove()
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
        contenedorPeliculaRandom.style.display = "none";
        contenedorPeliculasMilista.innerHTML = `<div id="contenedorPeliculasMilista" class="contenedor">
                                                    <div class="contenedorPeliculasTitulo" id="contenedorMilista">
                                                        <h2>Mi Lista <hr></h2>
                                                    </div>
                                                    <div id="miLista" class="contenedorPeliculas"></div>
                                                </div>`;
        home.appendChild(contenedorPeliculasMilista)
        let miListaContenedor = document.getElementById("miLista")
        if (miLista){
            for(const peli of miLista){
                let peliculaEnMiLista = document.createElement("div");
                peliculaEnMiLista.setAttribute("id", "contenedorPeliculasMilista");
                peliculaEnMiLista.setAttribute("class", "contenedor");
                peliculaEnMiLista.innerHTML =`<div id= "${peli.id}" class="contenedorPeli">
                                                <img src="${peli.img}" class="contenedorPeliImg" alt="${peli.nombre}">
                                                <div class="contenedorInfo">
                                                    <div class="masInfo"> 
                                                        <p>${peli.nombre}</p> 
                                                    </div>
                                                    <div class="masInfoTexto">
                                                            <p>Genero: ${peli.genero}</p>
                                                            <p>Anio Estreno: ${peli.anio}</p>
                                                    </div>
                                                </div>
                                            </div>`
                miListaContenedor.appendChild(peliculaEnMiLista);
            }
        }
    }else{
        alert("inicia sesion para navegar por la pagina")
    }
}
let peliculaRandom = () =>{ 
    if(lugarInicio == false){
        contenedorTodasLasPeliculas.style.display = "none";
        contenedorCategorias.style.display = "none";
        contenedorBuscarPelicula.style.display = "none";
        contenedorPeliculasMilista.style.display = "none";
        contenedorPeliculaRandom.style.display = "block";
        contenedorPeliculaRandom.innerHTML = `<div id="contenedorPeliculasRandom" class="contenedor">
                                                    <div class="contenedorPeliculasTitulo" id="contenedorMilista">
                                                        <h2>Pelicula Random<hr></h2>
                                                    </div>
                                                    <div id="peliRandom" class="contenedorPeliculas"></div>
                                                </div>`;
        home.appendChild(contenedorPeliculaRandom)
        let randomContenedor = document.getElementById("peliRandom")
        let peliculaRandom = JSON.parse(localStorage.getItem("peliRandom"))
        let peliculaRandomContenedor = document.createElement("div");
        peliculaRandomContenedor.setAttribute("id", "contenedorPeliculasMilista");
        peliculaRandomContenedor.setAttribute("class", "contenedor");
        peliculaRandomContenedor.innerHTML =`<div id= "${peliculaRandom.id}" class="contenedorPeli">
                                        <img src="${"https://image.tmdb.org/t/p/original"+peliculaRandom.poster_path}" class="contenedorPeliImg" alt="${peliculaRandom.title}">
                                        <div class="contenedorInfo">
                                            <div class="masInfo"> 
                                                <p>${peliculaRandom.title}</p> 
                                            </div>
                                            <div class="masInfoTexto">
                                                    <p>Genero: ${peliculaRandom.genres[0].name}</p>
                                                    <p>Anio Estreno: ${peliculaRandom.release_date}</p>
                                            </div>
                                        </div>
                                    </div>`
        randomContenedor.appendChild(peliculaRandomContenedor);
    }else{
        alert("inicia sesion para navegar por la pagina")
    }
    
}

inicio.addEventListener("click", todasLasPeliculas)
botonBusqueda.addEventListener("click", buscarPelicula);
botonMiLista.addEventListener("click", mostrarMiLista);
peliRandom.addEventListener("click", peliculaRandom)

