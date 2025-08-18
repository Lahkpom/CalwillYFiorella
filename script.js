const contacForm = document.getElementById('contact-form');
const nameRegex = /^[A-Za-z\s]+$/;
const phoneNumberRegex = /^[0-9]{10}$/;
const messageRegex = /^[A-Za-z0-9\-\s]/g; // todo Que esto valide que no se metan símbolos extraños

contacForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const inputName = document.getElementById('name');
    const inputPhoneNumber = document.getElementById('phone-number');
    const inputMessage = document.getElementById('message');

    const cleanedName = nameValidation(inputName);
    const cleanedPjoneNumber = phoneNumberValidation(inputPhoneNumber);
    const cleanedMessage = messageValidation(inputMessage);

    if (cleanedName && cleanedPjoneNumber && cleanedMessage) {
        const whatsappNumber = '5491131883555';
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=Hola,%20mi%20nombre%20es%20${encodeURIComponent(cleanedName)}.%20Mi%20número%20de%20teléfono%20es%20${encodeURIComponent(cleanedPjoneNumber)}.%20${encodeURIComponent(cleanedMessage)}`;
        window.open(whatsappURL, '_blank');
        contacForm.reset();
    } else {
        console.log('Error en la validación del formulario.');
    }    

});

const nameValidation = (inputName) => {
    const cleanedName = inputName.value.trim();
    if (!nameRegex.test(cleanedName)) {
        alert('El nombre solo puede contener letras y espacios.');
        return false;
    }
    return cleanedName.toUpperCase(); // Convertir a mayúsculas
};

const phoneNumberValidation = (inputPhoneNumber) => {
    const cleanedPhoneNumber = inputPhoneNumber.value.trim().replace(/\D/g, '');
    if (!phoneNumberRegex.test(cleanedPhoneNumber)) {
        alert('El número de teléfono no puede contener espacios ni guines, y debe tener 10 caracteres.');
        return false;
    }
    return cleanedPhoneNumber; 
};

const messageValidation = (inputMessage) => {
    const cleanedMessage = inputMessage.value.trim();
    if (!messageRegex.test(cleanedMessage)) {
        alert('El mensaje no puede contener caracteres especiales.');
        return false;
    }
    return cleanedMessage; 
};
