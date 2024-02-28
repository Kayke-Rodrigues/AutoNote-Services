const password = document.getElementById('senha');
const icon = document.getElementById('icon');

function showHide() {
    if (password.type === 'password') { // Corrigido de 'senha' para 'password'
        password.type = 'text';
        icon.classList.add('hide');
    } else {
        password.type = 'password';
        icon.classList.remove('hide');
    }
}
