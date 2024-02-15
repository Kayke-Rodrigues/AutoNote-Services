function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    document.querySelectorAll('.circulo').forEach((circulo) => {
        circulo.classList.toggle('dark-mode-circulo');
    });

    var imagemClara = document.getElementById('imagemClara');
    var imagemDark = document.getElementById('imagemDark');

    if (document.body.classList.contains('dark-mode')) {
        imagemClara.style.display = 'none';
        imagemDark.style.display = 'inline-block';
      } else {
        imagemClara.style.display = 'inline-block';
        imagemDark.style.display = 'none';
      }


      var iconeEscuro = document.getElementById("iconePessoaEscuro");
      var iconeBranco = document.getElementById("iconePessoaBranco")
      var botaoClara = document.getElementById('claraModeToggle');
      var botaoDark = document.getElementById('darkModeToggle');
    
      if (document.body.classList.contains('dark-mode')) {
        iconeEscuro.style.display = 'none';
        botaoDark.style.display = 'none'
        iconeBranco.style.display = 'inline-block';
        botaoClara.style.display = 'inline-block';
      } else {
        iconeEscuro.style.display = 'inline-block';
        botaoDark.style.display = 'inline-block';
        iconeBranco.style.display = 'none';
        botaoClara.style.display = 'none'
      }
    }

    // Preferência de tema armazenada
const temaSalvo = localStorage.getItem('tema');

// Preferência de tema, aplica o tema correspondente
if (temaSalvo === 'escuro') {
    applyDarkModeStyles();
} else {
    applyLightModeStyles();
}


// Aplicar estilos do modo escuro
function applyDarkModeStyles() {

  document.body.classList.add('dark-mode');
  document.getElementById('caixaLogin').classList.add('dark-mode');
  document.getElementById('cabecalho').classList.add('dark-mode');
}

// Aplica estilos do modo claro
function applyLightModeStyles() {

  document.body.classList.remove('dark-mode');
  document.getElementById('caixaLogin').classList.remove('dark-mode');
  document.getElementById('cabecalho').classList.remove('dark-mode');

}

