// MOSTRAR / OCULTAR CONTRASEÑA
const registerForm = document.getElementById("registerForm");
const password = document.getElementById("password");


registerForm.addEventListener("click", function () {

    const icon = this.querySelector("i");

    if (password.type === "password") {

        // Mostrar contraseña
        password.type = "text";

        // Cambiar a ojo cerrado
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");

    } else {

        // Ocultar contraseña
        password.type = "password";

        // Cambiar a ojo abierto
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");

    }

});
const login = document.getElementById("login");
const register = document.getElementById("register");

login.addEventListener("click", ()=>{
    alert("Redireccionando al Inicio de Sesión...");
});
register.addEventListener("click", ()=>{
    alert("Redireccionando al Registro...");

});