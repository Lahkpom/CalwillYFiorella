document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    //Validar que el name solo sean letras y espacios y luego ponerlo todo en mayusculas
    const nameRegex = /^[A-Za-z\s]+$/;
    if (nameRegex) {
        alert('El name solo puede contener letras y espacios.');
        return;
    }
    const nameMayusculas = name.toUpperCase();
    
    //Hacer que en el input name se ponga el valor en mayusculas inmediatamente al hacer click fuera del input
    document.getElementById('name').value = nameMayusculas;
    
    if (name.trim() === '') {
        // Ejemplo usando Bootstrap (requiere que el script de Bootstrap esté cargado)
        const alertPlaceholder = document.createElement('div');
        alertPlaceholder.innerHTML = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                El name es obligatorio.
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `;
        document.body.appendChild(alertPlaceholder);
    } else {
        alert('Formulario enviado correctamente');
    }
});