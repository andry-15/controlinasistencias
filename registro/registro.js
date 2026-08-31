const registerForm = document.getElementById("registerForm");
const password = document.getElementById("password");
// MOSTRAR CONTRASEÑA
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {
    
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
registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre =
        document.getElementById("nombre").value.trim();
    const correo =
        document.getElementById("correo").value.trim();
    const documento =
        document.getElementById("documento").value.trim();
    const tipoUsuario =
        document.getElementById("tipoUsuario").value;
    // Comprobar longitud
    if (password.value.length < 6) {
        alert(
            "La contraseña debe tener mínimo 6 caracteres."
        );
        return;
    }
    // Registro correcto
    alert(
        "¡Registro exitoso! Bienvenido/a " + nombre
    );
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Documento:", documento);
    console.log("Tipo de usuario:", tipoUsuario);

    registerForm.reset();

});