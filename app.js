const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');
const container = document.getElementById('container');

signUpBtn.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInBtn.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

function validate() {
  var name = document.querySelector('input[name="name"]').value;
  var email = document.querySelector('input[name="email"]').value;
  var password = document.querySelector('input[name="password"]').value;

  if (!name || !email || !password) {
    alert("Por favor, complete todos los campos.");
  } else {
    // Aquí va el código para enviar los datos a la base de datos
  }
}