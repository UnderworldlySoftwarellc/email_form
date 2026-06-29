const form = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const reasonInput = document.getElementById('reason');
const messageInput = document.getElementById('message');
const statusEl = document.getElementById('status');

form.addEventListener('submit', (event) => {
  statusEl.textContent = '';
  statusEl.classList.remove('error');

  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (!email) {
    event.preventDefault();
    statusEl.textContent = 'Please enter your email address.';
    statusEl.classList.add('error');
    return;
  }

  if (!emailInput.checkValidity()) {
    event.preventDefault();
    statusEl.textContent = 'Please enter a valid email address.';
    statusEl.classList.add('error');
    return;
  }

  if (!message) {
    event.preventDefault();
    statusEl.textContent = 'Please enter a message to send.';
    statusEl.classList.add('error');
    return;
  }

  if (!reasonInput.value) {
    event.preventDefault();
    statusEl.textContent = 'Please choose a reason for contacting us.';
    statusEl.classList.add('error');
    return;
  }

  statusEl.textContent = 'Sending...';
});
