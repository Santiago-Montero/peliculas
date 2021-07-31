class Usuario{
    constructor(nombre, mail, contrasenia) {
        this.nombre = nombre;
        this.mail = mail;
        this.contrasenia = contrasenia;
    }
}

let lugarInicio = true; // variable para que no pueda cargar peliculas , etc sin iniciar sesion

contenedorCategorias.style.display = "none";
contenedorBuscarPelicula.style.display = "none";
contenedorPeliculasMilista.style.display = "none";

$(".home").hide()

let inicioSesion = (e) => {
    e.preventDefault()
    let usuarioNombre = $("#nombre").val()
    let usuarioMail = $("#mail").val()
    let usuarioContrasenia = $("#contrasenia").val()
    const usuarioNuevo = new Usuario (usuarioNombre,usuarioMail,usuarioContrasenia)
    localStorage.setItem("usuarioNuevo", JSON.stringify(usuarioNuevo))
    alert(`Muchas gracias ${usuarioNombre} te registrate con el mail ${usuarioMail}`);
    $(".inicio").hide();
    lugarInicio = false;
    todasLasPeliculas();
}
$("#btnInicioSesion").click(inicioSesion);
todasLasPeliculas();