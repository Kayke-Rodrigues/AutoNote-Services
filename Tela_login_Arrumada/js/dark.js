function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  document.getElementById('caixaLogin').classList.toggle('dark-mode').value;
  document.getElementById('cabecalho').classList.toggle('dark-mode');
  document.getElementById('DivImagemLogoApex').classList.toggle('dark-mode');
  document.getElementById('formcores').classList.toggle('dark-mode-form');
  document.getElementById('senha').classList.toggle('dark-mode-password');
  document.getElementById('email').classList.toggle('dark-mode-email');
  document.getElementById('enviar').classList.toggle('dark-mode-enviar');
  document.getElementById('imagemClara').classList.toggle('dark-mode-logo')

  var section = document.querySelector('.info');
  section.classList.toggle('dark-mode-section');

  var imagemClara = document.getElementById('imagemClara');
  var imagemDark = document.getElementById('imagemDark');

  var botaoClara = document.getElementById('claraModeToggle');
  var botaoDark = document.getElementById('darkModeToggle');

  if (document.body.classList.contains('dark-mode')) {
    imagemClara.style.display = 'none';
    botaoDark.style.display = 'none'
    imagemDark.style.display = 'inline-block';
    botaoClara.style.display = 'inline-block';
  } else {
    imagemClara.style.display = 'inline-block';
    botaoDark.style.display = 'inline-block';
    imagemDark.style.display = 'none';
    botaoClara.style.display = 'none'
  }
}

