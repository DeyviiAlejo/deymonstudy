document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Validación de campos
        if (validateForm()) {
            // Aquí podrías enviar el formulario mediante AJAX o simplemente permitir el envío por defecto
            // form.submit(); // Descomentar esta línea si deseas enviar el formulario de forma estándar
            alert('Formulario enviado correctamente');
        } else {
            alert('Por favor completa todos los campos obligatorios y asegúrate que las contraseñas coincidan.');
        }
    });

    function validateForm() {
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const fechaNacimiento = document.getElementById('fecha-nacimiento').value.trim();
        const contrasena = document.getElementById('contrasena').value;
        const confirmarContrasena = document.getElementById('confirmar-contrasena').value;

        // Validación de campos obligatorios
        if (nombre === '' || email === '' || fechaNacimiento === '' || contrasena === '' || confirmarContrasena === '') {
            return false;
        }

        // Validación de contraseñas coincidentes
        if (contrasena !== confirmarContrasena) {
            return false;
        }

        return true;
    }
});
