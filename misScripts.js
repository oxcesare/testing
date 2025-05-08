// Función para formatear la fecha
function obtenerFechaAmigable() {
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = new Date();
    return fecha.toLocaleDateString('es-ES', opciones);  // En español
}


function mostrarFecha() {
    document.getElementById('fecha').textContent = obtenerFechaAmigable();
}

// Asegurarse de que el DOM se haya cargado completamente antes de ejecutar la función
document.addEventListener("DOMContentLoaded", function() {
    mostrarFecha(); // Llamada a la función para mostrar la fecha
});

function validarFormulario() {
    
    let email = document.getElementById("newEmail").value;
    let password = document.getElementById("newPassword").value;
    
    if (!email.includes("@") || !email.includes(".")) {
        alert("Por favor, ingrese un correo válido.");
        return false;
    }
    
    if (password.length < 9) {
        alert("La contraseña debe tener al menos 9 caracteres.");
        return false;
    }

    
    if (email.toLowerCase() === 'juan.perez@email.com' || 'ana.perez@ux.edu.mx') {
        emailError.style.display = 'block';
        return false; // evita que se envíe el formulario
    } else {
        emailError.style.display = 'none';
        return true; // permite el envío si el correo no está registrado
    }
    
    return true;
}

function cancelarCita(medico, especialidad, fecha, hora) {
    window.location.href = `confirmacion_cancelacion.html?medico=${encodeURIComponent(medico)}&especialidad=${encodeURIComponent(especialidad)}&fecha=${encodeURIComponent(fecha)}&hora=${encodeURIComponent(hora)}`;
}

function validarUsuario() {
    
    event.preventDefault(); // Evita que el formulario se envíe

    let tipoUsuario = document.getElementById('username').value;
    let contra = document.getElementById('password').value;

    if (tipoUsuario === "doctor") {
        window.location.href = "doctor.html";
    } else if (tipoUsuario === "Cesar" && contra === "123456789") {
        window.location.href = "paciente.html";
    }else if (tipoUsuario === "Ana" && contra === "123456789") {
        window.location.href = "paciente.html";
    }
     else {
        alert("Contraseña incorrecta");
        window.location.href = "index.html";
    }
}

function enviarRecuperacion(event) {
    event.preventDefault();
    document.getElementById("mensaje").innerText = "El Link para recuperar tu contraseña se envió a tu correo";
}
