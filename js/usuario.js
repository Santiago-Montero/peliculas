
class Usuario{
    constructor(nombre, mail, contrasenia) {
        this.nombre = nombre;
        this.mail = mail;
        this.contrasenia = contrasenia;
        // this.milista = [];
    }
}
$(".home").hide()
let inicioSesion = (e) => {
    e.preventDefault()
    let usuarioNombre = $("#nombre").val()
    let usuarioMail = $("#mail").val()
    let usuarioContrasenia = $("#contrasenia").val()
    const usuarioNuevo = new Usuario (usuarioNombre,usuarioMail,usuarioContrasenia)
    localStorage.setItem("usuarioNuevo", JSON.stringify(usuarioNuevo))
    alert(`Muchas gracias ${usuarioNombre} te registrate con el mail ${usuarioMail}`);
    $(".home").show()
    $(".inicio").hide()
    $(".homeContenedorMilista").hide()
    $("#pelis").fadeIn()
}
$("#btnInicioSesion").click(inicioSesion);
