

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  document.getElementById('caixaLogin').classList.toggle('dark-mode')
  document.getElementById('cabecalho').classList.toggle('dark-mode');
  document.getElementById('DivImagemLogoApex').classList.toggle('dark-mode');
  document.getElementById('formcores').classList.toggle('dark-mode-form');
  document.getElementById('senha').classList.toggle('dark-mode-password');
  document.getElementById('email').classList.toggle('dark-mode-email');
  document.getElementById('enviar').classList.toggle('dark-mode-enviar');
  document.getElementById('imagemLogo').classList.toggle('dark-mode-logo')

  var section = document.querySelector('.info');
  section.classList.toggle('dark-mode-section');

  var imagemClara = document.getElementById('imagemClara');
  var imagemDark = document.getElementById('imagemDark');

  if (document.body.classList.contains('dark-mode')) {
    imagemClara.style.display = 'none';
    imagemDark.style.display = 'inline-block';
  } else {
    imagemClara.style.display = 'inline-block';
    imagemDark.style.display = 'none';
  }
}

