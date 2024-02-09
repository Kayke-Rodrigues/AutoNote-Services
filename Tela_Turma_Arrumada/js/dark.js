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

      if (document.body.classList.contains('dark-mode')) {
        iconeEscuro.style.display = 'none';
        iconeBranco.style.display = 'inline-block';
      } else {
        iconeEscuro.style.display = 'inline-block';
        iconeBranco.style.display = 'none';
      }
    }
