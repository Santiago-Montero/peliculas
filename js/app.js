let arrayConPelis = []
let hola= []
let miLista = []
let categorias = [
    {genero: 'accion', nombre : "Accion"},
    {genero: 'animacion', nombre : "Animacion"},
    {genero: 'aventura', nombre : "Aventura"},
    {genero: 'cienciaficcion', nombre : "Ciencia ficcion"},
    {genero: 'comedia', nombre : "Comedia"},
    {genero: 'drama', nombre : "Drama"},
    {genero: 'terror', nombre : "Terror"}
]
let peliculas = [
    {id:1, nombre: 'Star Wars', genero: 'cienciaficcion', anio: 1977, atp: true, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625508101/afterclass/ahT4ObS7XKedQkOSpGr1wQ97aKA_s86oek.jpg'},
    {id:2, nombre: 'Nobody', genero: 'accion', anio: 2021, atp: false, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625508101/afterclass/ddO5a3tMPpQutSDQO1bESgLWadB_nsr7h6.jpg'},
    {id:3, nombre: 'Mortal Kombat', genero: 'aventura', anio: 2021, atp: false, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625508102/afterclass/t2GbiMJfO8txoihdJC8RsfK1ds7_e9o7v4.jpg'},
    {id:4, nombre: 'Interstellar', genero: 'cienciaficcion', anio: 2014, atp: false, img: 'https://res.cloudinary.com/vaporbox/image/upload/v1625508102/afterclass/nrSaXF39nDfAAeLKksRCyvSzI2a_hvgguc.jpg'},
    {id:5, nombre: 'The Big Lebowsky', genero: 'comedia', anio: 1998, atp: false, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625508101/afterclass/EJFkJD9BH400jfzKz3W5xLYHQa_ic29jw.jpg'},
    {id:6, nombre: 'Mulan', genero: 'aventura', anio: 2020, atp: true, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625508101/afterclass/72XYwdIugXnjHxS6upI6U0yeTBU_lk2u9w.jpg' },
    {id:7, nombre: 'A Quiet Place', genero: 'terror', anio: 2018, atp: false, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625508101/afterclass/5pairI20KJs1SEa4Z8yAsPR779m_a9uwch.jpg'},
    {id:8, nombre: 'The Exorcist', genero: 'terror', anio: 1973, atp: false, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625508103/afterclass/rQU3sOBms4WA7iFAqBCtbMXgaB8_ynkkix.jpg'},
    {id:9, nombre: 'SpongeBob', genero: 'animacion', anio: 2020, atp: true, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625508102/afterclass/fi2pg2mtAZwhq3qVuAs6PztjnHT_hbdv35.jpg'},
    {id:10, nombre: 'Luca', genero: 'animacion', anio: 2020, atp: true, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625540511/afterclass/pr06RihHOGE3waZQx5fs2WYUdwr_a7dvh2.jpg'},
    {id:11, nombre: 'Spirit', genero: 'animacion', anio: 2021, atp: true, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625540564/afterclass/mptEtOkw906BJuD9rRUKG5sr5E9_s43aw0.jpg'},
    {id:12, nombre: 'Monster Inc.', genero: 'animacion', anio: 2001, atp: true, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625540669/afterclass/jTE3BLVCpYaR71L2U8SHV22HvEr_fbtiu6.jpg'},
    {id:13, nombre: 'Blade Runner', genero: 'cienciaficcion', anio: 1982, atp: false, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625540759/afterclass/k7tpmwwSqwJ6l1f1FqDMnM7x5c2_tgukok.jpg'},
    {id:14, nombre: 'Joker', genero: 'drama', anio: 2019, atp: false, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625540959/afterclass/v0eQLbzT6sWelfApuYsEkYpzufl_e85kyq.jpg'},
    {id:15, nombre: 'Rey León', genero: 'animacion', anio: 1994, atp: true, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625541034/afterclass/b0MxU37dNmMwKtoPVYPKOZSIrIn_xx4f3x.jpg'},
    {id:16, nombre: 'Jurassic Park', genero: 'cienciaficcion', anio: 1993, atp: false, img:'https://res.cloudinary.com/vaporbox/image/upload/v1625541181/afterclass/1r8TWaAExHbFRzyqT3Vcbq1XZQb_jotm6u.jpg'},
]
let cargarCategorias = () =>{
    for(const cate of categorias){
        $(".categorias").append(` <li class ="dropdown-item">
                                <a onclick="filtrarPorGenero(${cate.genero})">${cate.nombre}</a></li>
                                `)
    }
}

let mostrarPelis = (vectorPelis) =>{
    for (const peli of vectorPelis){
        $("#pelis").append(`
                            <div id= "${peli.id}" class="contenedorPeli">
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
                            </div>
        `)
        $("#pelis").hide()
        $("#pelis2").hide()
        $(".homeContenedorMilista").hide()
    }
}
$("#barra").change(function buscar() {
    $("#pelis").hide()
    let peli = $("#barra").val()
    let peliEncontrada =  peliculas.find(elemento => elemento.nombre == peli)
    arrayConPelis.push(peliEncontrada)
    if (arrayConPelis != null){
        for (const peli of arrayConPelis){
            $("#pelis2").append(`
                                <div id= "${peli.id}" class="contenedorPeli">
                                    <img src="${peli.img}" class="contenedorPeliImg" alt="${peli.nombre}">
                                    <div class="masInfo"> 
                                    <p>${peli.nombre}</p> 
                                        <div class="masInfoBtn">
                                            <button onclick="agregarAmiLista(${peli.id})">+</button>
                                        </div>
                                    </div>
                                    <p>Genero: ${peli.genero}</p>
                                    <p>Anio Estreno: ${peli.anio}</p>
                                </div>
            `)
            $(".home").css({    "background-image": `url("${peli.img}")`,
                                "background-size" : "contain",
                                "heigth" : "1000px",
                                "width" : "1000px" 
            })
        }
    }
    $("#pelis2").slideDown()
    $("#todasLasPelis").hide()
    $(".homeContenedorMilista").hide()
    arrayConPelis.pop()
})
$("#barra").hide()
$("#boton").click(function animacionBoton (){
    $("#barra").toggle()
})

// let filtrarPorGenero = (genero) => {
//     let filtradas = peliculas.filter(e => e.id == genero)
//     arrayConPelis.push(filtradas)
// }
let agregarAmiLista = (idLista) => {
    let peliAlistada = peliculas.filter(e => e.id == idLista)
    miLista.push(peliAlistada[0])
    console.log(miLista)
}
$(".btnMiLista").click(function mostrarMiLista(){
    $("#pelis2").hide()
    $("#todasLasPelis").hide()
    $(".homeContenedorMilista").show()
    if (miLista != null){
        for(const peli of miLista){
            $("#miLista").append(`
                                <div class="contenedorPeli">
                                    <img src="${peli.img}" class="contenedorPeliImg" alt="${peli.nombre}">
                                    <div class="masInfo"> 
                                        <p>${peli.nombre}</p> 
                                        <div class="masInfoBtn">
                                            <button onclick="agregarAmiLista(${peli.id})">+</button>
                                        </div>
                                    </div>
                                    <p>Genero: ${peli.genero}</p>
                                    <p>Anio Estreno: ${peli.anio}</p>
                                </div> `)
        }
    }
})
cargarCategorias()
mostrarPelis(peliculas)
