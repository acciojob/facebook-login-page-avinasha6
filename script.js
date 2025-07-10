function handleLogin(event) {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simulate login logic
  if (email && password) {
    alert(`Logged in as: ${email}`);
  } else {
    alert('Please enter both email and password.');
  }
}

function redirectToRegister() {
  // Redirect to registration page (replace with actual link)
  window.location.href = 'register.html';
}
