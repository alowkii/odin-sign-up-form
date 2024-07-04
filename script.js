const form = document.getElementById('signup');
const submitBtn = document.getElementById('submit-btn');
const phone = document.getElementById('phn-no');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('confirm-password');
const email = document.getElementById('email');
const inputFields = document.querySelectorAll('input');
const errorDisplayers = document.querySelectorAll('.error');

let validCount = 0;

function validateForm() {
    validCount = 0;

    inputFields.forEach((input, index) => {
        const errorDisplay = errorDisplayers[index];

        if (input.value.trim() !== '') {
            errorDisplay.textContent = '';
            validCount++;
        } else {
            errorDisplay.textContent = '* This field is required';
        }
    });

    validatePhone();
    validateEmail();
    validatePassword();
    validatePasswordConfirm();

    if (validCount === inputFields.length) {
        alert('Form submitted successfully!');
        form.submit();
    }
}

function validatePhone() {
    const phoneError = errorDisplayers[3];
    const phoneValue = phone.value.trim();

    if (phoneValue === '') {
        phoneError.textContent = '* This field is required';
    } else if (!phoneValue.match(/^\d{3}-\d{3}-\d{4}$/)) {
        phoneError.textContent = '* Please enter a valid number (xxx-xxx-xxxx)';
    } else {
        phoneError.textContent = '';
        validCount++;
    }
}

function validateEmail() {
    const emailError = errorDisplayers[2];
    const emailValue = email.value.trim();

    if (emailValue === '') {
        emailError.textContent = '* This field is required';
    } else if (!emailValue.includes('@') || !emailValue.includes('.')) {
        emailError.textContent = '* Please provide a valid Email';
    } else {
        emailError.textContent = '';
        validCount++;
    }
}

function validatePassword() {
    const passwordError = errorDisplayers[4];
    const passwordValue = password.value.trim();

    if (passwordValue === '') {
        passwordError.textContent = '* This field is required';
    } else if (passwordValue.length < 8) {
        passwordError.textContent = '* Password requires minimum 8 characters';
    } else {
        passwordError.textContent = '';
        validCount++;
    }
}

function validatePasswordConfirm() {
    const passwordConfirmError = errorDisplayers[5];
    const passwordValue = password.value.trim();
    const passwordConfirmValue = passwordConfirm.value.trim();

    if (passwordConfirmValue === '') {
        passwordConfirmError.textContent = '* This field is required';
    } else if (passwordValue !== passwordConfirmValue) {
        passwordConfirmError.textContent = '* Passwords do not match';
    } else {
        passwordConfirmError.textContent = '';
        validCount++;
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    validateForm();
});
