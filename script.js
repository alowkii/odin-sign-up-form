document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup');
    const submitBtn = document.getElementById('submit-btn');
    const phone = document.getElementById('phn-no');
    const password = document.getElementById('password');
    const passwordConfirm = document.getElementById('confirm-password');
    const email = document.getElementById('email');
    const inputFields = document.querySelectorAll('#signup input');
    const errorDisplayers = document.querySelectorAll('.error');

    function validateForm() {
        let isValid = true;

        inputFields.forEach((input, index) => {
            const errorDisplay = errorDisplayers[index];
            if (input.value.trim() !== '') {
                errorDisplay.textContent = '';
            } else {
                errorDisplay.textContent = '* This field is required';
                isValid = false;
            }
        });

        if (!validatePhone()) isValid = false;
        if (!validateEmail()) isValid = false;
        if (!validatePassword()) isValid = false;
        if (!validatePasswordConfirm()) isValid = false;

        if (isValid) {
            alert('Form submitted successfully!');
            form.submit();
        }
    }

    function validatePhone() {
        const phoneError = errorDisplayers[3];
        const phoneValue = phone.value.trim();

        if (phoneValue === '') {
            phoneError.textContent = '* This field is required';
            return false;
        } else if (!phoneValue.match(/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/)) {
            phoneError.textContent = '* Please enter a valid number (XXX-XXX-XXXX)';
            return false;
        } else {
            phoneError.textContent = '';
            return true;
        }
    }

    function validateEmail() {
        const emailError = errorDisplayers[2];
        const emailValue = email.value.trim();

        if (emailValue === '') {
            emailError.textContent = '* This field is required';
            return false;
        } else if (!emailValue.includes('@') || !emailValue.includes('.')) {
            emailError.textContent = '* Please provide a valid Email';
            return false;
        } else {
            emailError.textContent = '';
            return true;
        }
    }

    function validatePassword() {
        const passwordError = errorDisplayers[4];
        const passwordValue = password.value.trim();

        if (passwordValue === '') {
            passwordError.textContent = '* This field is required';
            return false;
        } else if (passwordValue.length < 8) {
            passwordError.textContent = '* Password requires minimum 8 characters';
            return false;
        } else {
            passwordError.textContent = '';
            return true;
        }
    }

    function validatePasswordConfirm() {
        const passwordConfirmError = errorDisplayers[5];
        const passwordValue = password.value.trim();
        const passwordConfirmValue = passwordConfirm.value.trim();

        if (passwordConfirmValue === '') {
            passwordConfirmError.textContent = '* This field is required';
            return false;
        } else if (passwordValue !== passwordConfirmValue) {
            passwordConfirmError.textContent = '* Passwords do not match';
            return false;
        } else {
            passwordConfirmError.textContent = '';
            return true;
        }
    }

    submitBtn.addEventListener('click', function (e) {
        e.preventDefault();
        validateForm();
    });
});
