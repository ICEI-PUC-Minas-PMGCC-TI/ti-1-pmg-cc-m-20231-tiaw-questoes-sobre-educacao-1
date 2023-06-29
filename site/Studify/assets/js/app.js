document.addEventListener('DOMContentLoaded', function () {
    var btnSalvar = document.getElementById('btnSalvar');
    var btnCarregar = document.getElementById('btnCarregar');
    var dadosContainer = document.getElementById('dadosContainer');


    btnSalvar.addEventListener('click', function () {
        var linkPagina = window.location.href;
        var tituloPagina = document.title;
        var dados = {
            link: linkPagina,
            titulo: tituloPagina,
        };
        localStorage.setItem('dadosSalvos', JSON.stringify(dados));

        alert('Dados salvos com sucesso!');
    });

   
});