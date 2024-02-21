// Aplica estilos do modo escuro
function applyDarkModeStyles() {
  document.body.classList.add('dark-mode');
  document.getElementById('caixaLogin').classList.add('dark-mode');
  document.getElementById('cabecalho').classList.add('dark-mode');
  document.getElementById('formcores').classList.add('dark-mode-form');
  document.getElementById('senha').classList.add('dark-mode-password');
  document.getElementById('email').classList.add('dark-mode-email');
  document.getElementById('enviar').classList.add('dark-mode-enviar');
  
}




// Aplica estilos do modo claro
function applyLightModeStyles() {
  document.body.classList.remove('dark-mode');
  document.getElementById('caixaLogin').classList.remove('dark-mode');
  document.getElementById('cabecalho').classList.remove('dark-mode');
  document.getElementById('formcores').classList.remove('dark-mode-form');
  document.getElementById('senha').classList.remove('dark-mode-password');
  document.getElementById('email').classList.remove('dark-mode-email');
  document.getElementById('enviar').classList.remove('dark-mode-enviar');

}

// Alterna entre os modos claro e escuro
function toggleDarkMode() {
  // Troca a classe do corpo para ativa/desativa o modo escuro
  document.body.classList.toggle('dark-mode');

  // Salva a preferência do tema no localStorage
  const temaPreferido = document.body.classList.contains('dark-mode') ? 'escuro' : 'claro';
  localStorage.setItem('tema', temaPreferido);

  // Atualiza a aparência de acordo com o modo
  updateAppearance();
}

// Atualiza a aparência com base no tema salvo
function updateAppearance() {
  const temaSalvo = localStorage.getItem('tema');

  // Aplica o tema correspondente
  if (temaSalvo === 'escuro') {
    applyDarkModeStyles();

    // Troca a imagem na DivImagem para o modo escuro
    document.getElementById('imagemClara').style.display = 'inline-block';
    document.getElementById('darkModeToggle').style.display = 'none';
    document.getElementById('imagemDark').style.display = 'inline-block';
    document.getElementById('claraModeToggle').style.display = 'inline-block';
  } else {
    applyLightModeStyles();

    // Troca a imagem na DivImagem para o modo claro
    document.getElementById('imagemClara').style.display = 'inline-block';
    document.getElementById('imagemDark').style.display = 'none';
    document.getElementById('claraModeToggle').style.display = 'none';
    document.getElementById('darkModeToggle').style.display = 'inline-block';
  }
}

// Atualiza a aparência com base no tema salvo
document.addEventListener('DOMContentLoaded', updateAppearance);
