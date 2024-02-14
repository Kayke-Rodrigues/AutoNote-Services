
document.addEventListener('DOMContentLoaded', function () {
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const form = document.getElementById('formcores');
const errorElement = document.getElementById('error');

const usuariosAlocados = {
    'usuario1': 'senha1',
    'usuario2': 'senha2',
    'rafael': '123',
    'matheus': '345',
    'eduardo': 'java'
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let messages = [];

    if (!(email.value in usuariosAlocados) || senha.value !== usuariosAlocados[email.value]) {
        messages.push('Nome de usuário ou senha inválidos');
        showError(messages.join(', '));

        setTimeout(() => {
            errorElement.innerText = '';
        }, 3000);
        
    } else {
        window.location.href = "./pagina_inicial.html";
    }
});

function showError(message) {
    errorElement.innerText = message;
}
})