function validacaoSenha(){
    var login = document.getElementById('usuarioInput').value;
    var senha = document.getElementById('senhaInput').value;

    if (login == 'rafael' && senha == 'php'){
        alert("Sucesso no Login")
        location.href="Home.html";
    }
    else if(senha == '' && login == ''){
        alert("Por favor preencha todos os campos");
    }
    else if( login != 'rafael'){
        alert("Usuario ou senha incorretos");
    }
    else if( senha != 'php'){
        alert("Usuario ou senha incorretos");
    }
    
}