// Aplica estilos do modo escuro
function applyDarkModeStyles() {
  document.body.classList.add('dark-mode');
}




// Aplica estilos do modo claro
function applyLightModeStyles() {
  document.body.classList.remove('dark-mode');
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
    document.getElementById('imagemClara').style.display = 'none';
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
