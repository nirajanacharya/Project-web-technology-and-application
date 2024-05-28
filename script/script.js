function validateForm(event) {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const genderInputs = document.getElementsByName('gender');
    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');
    const genderError = document.getElementById('genderError');
    let valid = true;

    // Name validation
    if (nameInput.value.length < 2 || nameInput.value.length > 50) {
        nameError.textContent = 'Name must be between 2 and 50 characters.';
        valid = false;
    } else {
        nameError.textContent = '';
    }

    // Phone validation
    if (phoneInput.value.length !== 10) {
        phoneError.textContent = 'Phone number must be exactly 10 digits.';
        valid = false;
    } else {
        phoneError.textContent = '';
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    // Gender validation
    let genderSelected = false;
    for (let i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].type === 'radio' && genderInputs[i].checked) {
            genderSelected = true;
            break;
        }
    }
    if (!genderSelected) {
        genderError.textContent = 'Please select your gender.';
        valid = false;
    } else {
        genderError.textContent = '';
    }

    // Prevent form submission if validation fails
    if (!valid) {
        event.preventDefault();
    }
}

// Attach validateForm to the form's submit event
document.getElementById('contactForm').addEventListener('submit', validateForm);
