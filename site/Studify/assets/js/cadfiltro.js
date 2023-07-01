//Begin Database
var db_filtros_inicial = {
  data: [
    {
      id: 1,
      diciplina: "Matemática",
      tema: "Funções",
      relevancia: "Alta",
      subtopicos: "Função afim",
    },
    {
      id: 2,
      diciplina: "Matemática",
      tema: "Funções",
      relevancia: "Média",
      subtopicos: "Função logaritma ",
    },
    {
      id: 3,
      diciplina: "Matemática",
      tema: "Funções",
      relevancia: "Baixa",
      subtopicos: "Função polinomial",
    },
  ],
};

var db = JSON.parse(localStorage.getItem("db_filtros"));

if (!db) {
  db = db_filtros_inicial;
}

function displayMessage(msg) {
  $("#msg").html('<div class="alert alert-warning">' + msg + "</div>");
}

function inserir(filtro) {
  db.data.push(filtro);
  displayMessage("Filtro inserido com sucesso");

  localStorage.setItem("db_filtros", JSON.stringify(db));
}

function atualizar(id, filtro) {
  let index = db.data.map(obj => obj.id).indexOf(id);

  db.data[index].diciplina = filtro.diciplina,
    db.data[index].tema = filtro.tema,
    db.data[index].relevancia = filtro.relevancia,
    db.data[index].subtopicos = filtro.subtopicos

  displayMessage("Filtro alterado com sucesso");

  localStorage.setItem("db_filtros", JSON.stringify(db));
}

function excluir(id) {
  let index = db.data.map(obj => obj.id).indexOf(id);

  db.data.splice(index, 1);

  displayMessage("Contato removido com sucesso");

  localStorage.setItem('db_filtros', JSON.stringify(db));
}

function listar() {
  $("#table-filtros").html("");

  for (i = 0; i < db.data.length; i++) {
    let ListaFiltros = db.data[i];
    $("#table-filtros")
      .append(`<tr>
               <td scope="row">${ListaFiltros.id}</td>
               <td>${ListaFiltros.diciplina}</td>
               <td>${ListaFiltros.tema}</td>                                             
               <td>${ListaFiltros.relevancia}</td>                                        
               <td>${ListaFiltros.subtopicos}</td>
               </tr>`);
  }
}
//End Database

//Begin index.html
let form = document.getElementById("form-filtros");
let diciplina = document.getElementById("inputDiciplina");
let tema = document.getElementById("inputTema");
let relevancia = document.getElementById("inputRelevancia");
let subtopicos = document.getElementById("inputSubtopicos");

let btnInserir = document.getElementById("btnInsert");
let btnUpdate = document.getElementById("btnUpdate");
let btnDelete = document.getElementById("btnDelete");
let btnLimpar = document.getElementById("btnClear");

let linhaFiltro;

if (btnInserir !== null) {
  btnInserir.addEventListener("click", inserirFiltro);
}
if (btnUpdate !== null) {
  btnUpdate.addEventListener("click", atualizarFiltro);
}
if (btnDelete !== null) {
  btnDelete.addEventListener("click", excluirFiltro);
}
if (btnDelete !== null) {
  btnLimpar.addEventListener("click", limpar);
}

$("#grid-contatos").on("click", "tr", function (e) {
  linhaFiltro = this;
  colunas = linhaFiltro.querySelectorAll("td");

  diciplina.value = colunas[1].innerText;
  tema.value = colunas[2].innerText;
  relevancia.value = colunas[3].innerText;
  subtopicos.value = colunas[4].innerText;
});

$("#msg").bind("DOMSubtreeModified", function () {
  window.setTimeout(function () {
    $(".alert")
      .fadeTo(500, 0)
      .slideUp(500, function () {
        $(this).remove();
      });
  }, 5000);
});

function inserirFiltro() {
  if (!form.checkValidity()) {
    displayMessage("Preencha o formulário corretamente.");
    return;
  }

  if (db.data.length != 0)
    novoId = db.data[db.data.length - 1].id + 1;

  let filtro = {
    id: novoId,
    diciplina: diciplina.value,
    tema: tema.value,
    relevancia: tema.value,
    subtopicos: tema.value,
  };

  inserir(filtro);

  listar();

  limpar();
}

function atualizarFiltro() {
  if (linhaFiltro == null) {
    displayMessage("Selecione um filtro para ser alterado.");
    return;
  }

  let filtro = {
    diciplina: diciplina.value,
    tema: tema.value,
    relevancia: relevancia.value,
    subtopicos: subtopicos.value,
  };

  atualizar(parseInt(colunas[0].innerText), filtro);

  listar();

  limpar();
}

function excluirFiltro() {
  if (linhaFiltro == null) {
    displayMessage("Selecione um filtro para ser alterado.");
    return;
  }

  excluir(parseInt(colunas[0].innerText));

  listar();

  limpar();
}

function limpar() {
  $("#form-filtros")[0].reset();
  linhaFiltro = null;
}
//End index.html

//Begin lista-filtros.html
let fDiciplina = document.getElementById("filtro_diciplina");
let fRelevancia = document.getElementById("filtro_relevancia");

if (fDiciplina !== null) {
  fDiciplina.addEventListener("change", listaFiltros);
}
if (fDiciplina !== null) {
  fRelevancia.addEventListener("change", listaFiltros);
}

function listaFiltros() {
  $("#table-filtros").empty();

  for (let index = 0; index < db.data.length; index++) {
    const filtros = db.data[index];

    if (((filtros.diciplina == fDiciplina.value) || (fDiciplina.value == '')) && ((filtros.relevancia == fRelevancia.value) || (fRelevancia.value == ''))) {
      $("#table-filtros").append(`<tr>
                                  <td scope="row">${filtros.id}</td>
                                  <td>${filtros.diciplina}</td>
                                  <td>${filtros.tema}</td>
                                  <td>${filtros.relevancia}</td>
                                  <td>${filtros.subtopicos}</td>
                                  </tr>`);
    }
  }
}
//End lista-filtros.html