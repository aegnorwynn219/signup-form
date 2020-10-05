const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const pwd = document.getElementById('password');

const errorFName = document.getElementById('errorFName');
const errorLName = document.getElementById('errorLName');
const errorEmail = document.getElementById('errorEmail');
const errorPwd = document.getElementById('errorPwd');

const inputDivFName = document.getElementById('inputDivFName');
const inputDivLName = document.getElementById('inputDivLName');
const inputDivEmail = document.getElementById('inputDivEmail');
const inputDivPwd = document.getElementById('inputDivPwd');

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  if (firstName.value === '' || firstName.value == null) {
    e.preventDefault();
    errorFName.classList.remove('hidden');
    inputDivFName.classList.remove('mb-6');
  };
  if (lastName.value === '' || lastName.value == null) {
    e.preventDefault();
    errorLName.classList.remove('hidden');
    inputDivLName.classList.remove('mb-6');
  };
  if (email.value === '' || email.value == null) {
    e.preventDefault();
    errorEmail.classList.remove('hidden');
    inputDivEmail.classList.remove('mb-6');
  };
  if (pwd.value === '' || pwd.value == null) {
    e.preventDefault();
    errorPwd.classList.remove('hidden');
    inputDivPwd.classList.remove('mb-6');
  };
});