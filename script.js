document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('registration-form');
    const infoDisplay = document.getElementById('info-display');
    const submittedInfo = document.getElementById('submitted-info');
    const showInfoButton = document.getElementById('show-info');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
        const direccion = document.getElementById('direccion').value;
        const contrasena = document.getElementById('contrasena').value;
        const confirmarContrasena = document.getElementById('confirmar-contrasena').value;

        // Validate form values
        let valid = true;

        // Clear previous error messages
        document.querySelectorAll('.error-message').forEach(elem => elem.textContent = '');

        if (!nombre) {
            document.getElementById('nombre-error').textContent = 'El nombre es obligatorio.';
            valid = false;
        }

        if (!email || !validateEmail(email)) {
            document.getElementById('email-error').textContent = 'El correo electrónico no es válido.';
            valid = false;
        }

        if (!contrasena || contrasena.length < 6) {
            document.getElementById('contrasena-error').textContent = 'La contraseña debe tener al menos 6 caracteres.';
            valid = false;
        }

        if (contrasena !== confirmarContrasena) {
            document.getElementById('confirmar-contrasena-error').textContent = 'Las contraseñas no coinciden.';
            valid = false;
        }

        if (!valid) return;

        // Prepare submitted information
        submittedInfo.innerHTML = `
            <div class="info-item"><strong>Nombre:</strong> <span>${nombre}</span></div>
            <div class="info-item"><strong>Email:</strong> <span>${email}</span></div>
            <div class="info-item"><strong>Teléfono:</strong> <span>${telefono || 'No proporcionado'}</span></div>
            <div class="info-item"><strong>Fecha de Nacimiento:</strong> <span>${fechaNacimiento}</span></div>
            <div class="info-item"><strong>Dirección:</strong> <span>${direccion || 'No proporcionado'}</span></div>
        `;

        // Show the information section
        infoDisplay.style.display = 'block';
    });

    showInfoButton.addEventListener('click', function() {
        if (infoDisplay.style.display === 'block') {
            infoDisplay.style.display = 'none';
        } else {
            infoDisplay.style.display = 'block';
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
