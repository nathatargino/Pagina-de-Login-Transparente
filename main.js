function mostrarSenha(element) {
  var inputPass = document.getElementById('senha');

  if (inputPass.type === 'password') {
    inputPass.setAttribute('type', 'text');
    element.textContent = 'visibility';
  } else {
    inputPass.setAttribute('type', 'password');
    element.textContent = 'visibility_off';
  }
}

function fazerLogin(button) {
  button.classList.add('loading');
    setTimeout(() => {
    button.classList.remove('loading');
  }, 3000);
}


