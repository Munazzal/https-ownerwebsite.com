document.addEventListener("DOMContentLoaded", function() {
   const steps = document.querySelectorAll('.step');
   let currentStepIndex = 0;

   // Hide all steps except the first one
   steps.forEach((step, index) => {
      if (index !== currentStepIndex) {
         step.style.display = 'none';
      }
   });

   // Function to show the current step and hide others
   function showStep(stepIndex) {
      steps.forEach((step, index) => {
         if (index === stepIndex) {
            step.style.display = 'block';
         } else {
            step.style.display = 'none';
         }
      });
   }

   // Function to navigate to the next step
   function nextStep() {
      if (currentStepIndex < steps.length - 1) {
         currentStepIndex++;
         showStep(currentStepIndex);
      }
   }

   // Function to navigate to the previous step
   function prevStep() {
      if (currentStepIndex > 0) {
         currentStepIndex--;
         showStep(currentStepIndex);
      }
   }

   // Event listeners for next and previous buttons
   document.getElementById('nextBtn').addEventListener('click', nextStep);
   document.getElementById('prevBtn').addEventListener('click', prevStep);
});
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