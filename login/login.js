// MOSTRAR / OCULTAR CONTRASEÑA
const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");
const loginForm = document.getElementById("loginForm");

if (togglePassword && password) {
    togglePassword.addEventListener("click", function () {
        const icon = this.querySelector("i");

        if (password.type === "password") {
            // Mostrar contraseña
            password.type = "text";

            // Cambiar a ojo cerrado / tachado
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
}

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const usuario = document.getElementById("usuario")?.value.trim();
        console.log("Inicio de sesión para:", usuario);
    });
}