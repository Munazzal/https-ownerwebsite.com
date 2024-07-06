const show = document.getElementById('show-pass');
const password = document.getElementById('password');
const email = document.getElementById('email');
const page = document.getElementById('login-page');
const close = document.getElementById('close');
const login = document.getElementById('login-button');
const submit = document.getElementById('submit');
const navbar = document.getElementById('navbar');
const close_nav = document.getElementById('nav-close');
const navopen = document.getElementById('nav-button');
let pass = false;
show.addEventListener('click', () => {
   if (!pass) {
      pass = true;
      password.type = 'text';
      show.style.filter = 'brightness(1)';
   }
   else {
      pass = false;
      password.type = 'password';
      show.style.filter = 'brightness(0)';
   }
});
close.addEventListener('click', function() {
   page.style.display = 'none';
   email.value = '';
   password.value = '';
   pass = false;
   password.type = 'password';
   show.style.filter = 'brightness(0)';
});
login.addEventListener('click', function() {
   page.style.display = 'block';
});
submit.addEventListener('click', function() {
   if (password.value.length >= 8) {
      localStorage.setItem('email', email.value);
      localStorage.setItem('password', password.value);
      alert('Sign Up Successfully!')
      page.style.display = 'none';
   }
   if (email.value === '') {
      alert('No email provided')
   }
   if (password.value.length < 8) {
      alert('Your password must contain 8 characters')
   }
});
close_nav.addEventListener('click', () => {
   navbar.style.display = 'none';
});
navopen.addEventListener('click', () => {
   navbar.style.display = 'block';
});