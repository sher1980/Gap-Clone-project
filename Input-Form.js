

function validateUsername() {
  const usernameInput = document.getElementById('username');
  const usernameError = document.getElementById('usernameError');

  
  if (usernameInput.value.length < 3) {
    usernameError.textContent = 'Username must be at least 3 characters long';
    usernameInput.classList.add('error');
  } else {
    usernameError.textContent = '';
    usernameInput.classList.remove('error');
  }
}

function validatePassword() {
  const passwordInput = document.getElementById('password');
  const passwordError = document.getElementById('passwordError');

  
  if (passwordInput.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters long';
    passwordInput.classList.add('error');
  } else {
    passwordError.textContent = '';
    passwordInput.classList.remove('error');
  }
}

function validateForm() {
  validateUsername();
  validatePassword();

}

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

usernameInput.addEventListener('input', validateUsername);
passwordInput.addEventListener('input', validatePassword);