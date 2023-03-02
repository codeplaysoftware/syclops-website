const contactForm = document.getElementById('contact-form');
const contactFormSubmitButton = document.querySelector('#contact-form button');

/**
 * Validate if the form is valid or not and update the submit button.
 */
function validateContactForm() {
    contactFormSubmitButton.setAttribute('disabled', true);

    if (contactForm.checkValidity()) {
        contactFormSubmitButton.removeAttribute('disabled');
    }
}

/**
 * Register some event listeners.
 */
['change', 'keyup'].forEach(evt =>
    contactForm.addEventListener(evt, () => validateContactForm(), false)
);

/**
 * Show/hide the form/message based on hash value.
 */
if(window.location.hash) {
    const hash = window.location.hash;

    if (hash === '#sent') {
        contactForm.style.display = 'none';
        document.querySelector('.message.sent').style.display = 'block';
    }
}
