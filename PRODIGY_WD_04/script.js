// Optional JavaScript code for form validation and submission

const form = document.querySelector('#contact form');
const nameInput = document.querySelector('#contact input[name="name"]');
const emailInput = document.querySelector('#contact input[name="email"]');
const messageInput = document.querySelector('#contact textarea');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    alert('Please fill out all fields before submitting the form.');
    return;
  }

  if (!validateEmail(emailInput.value)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Submit form data to server (optional)

  alert('Form submitted successfully!');
});

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}