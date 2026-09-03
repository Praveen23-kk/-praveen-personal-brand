const form = document.querySelector('.contact-form');
const status = document.querySelector('#form-status');
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', (event) => {
  const name = form.elements.name.value.trim();
  const message = form.elements.message.value.trim();

  if (name.length < 2 || message.length < 10) {
    event.preventDefault();
    status.textContent = 'Please enter a name and a message of at least 10 characters.';
    return;
  }

  submitButton.disabled = true;
  submitButton.setAttribute('aria-disabled', 'true');
  submitButton.firstChild.textContent = 'Sending… ';
  status.textContent = 'Sending your message securely…';
});
