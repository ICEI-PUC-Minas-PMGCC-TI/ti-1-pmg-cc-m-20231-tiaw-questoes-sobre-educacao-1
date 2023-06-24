document.addEventListener('DOMContentLoaded', function () {

    var btnCarregar = document.getElementById('btnCarregar');

    btnCarregar.addEventListener('click', function () {
        if (localStorage.getItem('dadosSalvos')) {
            var dados = JSON.parse(localStorage.getItem('dadosSalvos'));
            let titulo = document.getElementById('titulo');
            let videoLink = document.getElementById('linkpagina');
            titulo.innerHTML = dados.titulo;
            videoLink.href = dados.link;
            videoLink.textContent = 'link página';
            //alert(dados.titulo);
            //alert(dados.link);

            var conteudo = `
            <p>Link: ${dados.link}</p>
            <p>Título: ${dados.titulo}</p>
          `

            // dadosContainer.innerHTML = conteudo;
            alert('Dados carregados do Local Storage!');
        }
    });
})