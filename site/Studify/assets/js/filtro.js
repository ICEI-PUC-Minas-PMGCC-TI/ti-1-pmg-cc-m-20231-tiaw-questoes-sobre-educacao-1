///Database preparation
let dbVideos = {};
if (!localStorage.getItem("db_videos")) {
  dbVideos = [
    { id: '00000001', title: 'tituloExemplo1', link: 'R8UZRBFWJXY', materia: 'Matemática', topico: 'Álgebra', subtopico: 'Função', dificuldade: 'baixa', indicadorQualidade: 55 },
    { id: '00000002', title: 'tituloExemplo2', link: 'l5CthpmAWIU', materia: 'Matemática', topico: 'Álgebra', subtopico: 'Inequação', dificuldade: 'alta', indicadorQualidade: 20 },
    { id: '00000003', title: 'tituloExemplo3', link: 'l5CthpmAWIU', materia: 'Matemática', topico: 'Álgebra', subtopico: 'Função', dificuldade: 'média', indicadorQualidade: 30 },
    { id: '00000004', title: 'tituloExemplo4', link: 'nysu0K-VXR8', materia: 'Matemática', topico: 'Álgebra', subtopico: 'Inequação', dificuldade: 'média', indicadorQualidade: 2 },
    { id: '00000005', title: 'tituloExemplo5', link: 'DUk6IShk-Hc', materia: 'Matemática', topico: 'Álgebra', subtopico: 'Polinômios', dificuldade: 'baixa', indicadorQualidade: 5 },
    { id: '00000006', title: 'tituloExemplo6', link: 'dmJtczMY9fY', materia: 'Matemática', topico: 'Geometria', subtopico: 'Geometria Analítica', dificuldade: 'média', indicadorQualidade: 10 },
    { id: '00000007', title: 'tituloExemplo7', link: 'EdM5qFTQvhY', materia: 'Matemática', topico: 'Geometria', subtopico: 'Geometria Analítica', dificuldade: 'alta', indicadorQualidade: 8 },
    { id: '00000008', title: 'tituloExemplo8', link: 'Y_gD7S6OkC4', materia: 'Matemática', topico: 'Geometria', subtopico: 'Geometria Espacial', dificuldade: 'média', indicadorQualidade: 1500 },
    { id: '00000009', title: 'tituloExemplo9', link: '6PpNrCkDwcM', materia: 'Matemática', topico: 'Geometria', subtopico: 'Geometria Espacial', dificuldade: 'alta', indicadorQualidade: 0 },
    { id: '00000010', title: 'tituloExemplo10', link: 'ufA5Vkc2aDM', materia: 'Matemática', topico: 'Geometria', subtopico: 'Geometria Espacial', dificuldade: 'alta', indicadorQualidade: 90 },
    { id: '00000011', title: 'tituloExemplo11', link: 'b0AQkMYvWU8', materia: 'Matemática', topico: 'Números', subtopico: 'Porcentagem', dificuldade: 'baixa', indicadorQualidade: 5 },
    { id: '00000012', title: 'tituloExemplo12', link: 'OjOyNmTt7Mw', materia: 'Matemática', topico: 'Números', subtopico: 'Porcentagem', dificuldade: 'alta', indicadorQualidade: 11 },
    { id: '00000013', title: 'tituloExemplo13', link: 'k2XkYEUH9nA', materia: 'Matemática', topico: 'Números', subtopico: 'Logaritmos', dificuldade: 'média', indicadorQualidade: 871 },
    { id: '00000014', title: 'tituloExemplo14', link: '1B_HAdLci7o', materia: 'Matemática', topico: 'Números', subtopico: 'Porcentagem', dificuldade: 'alta', indicadorQualidade: 2 },
    { id: '00000015', title: 'tituloExemplo15', link: 'GgqIUBwyQm4', materia: 'Matemática', topico: 'Números', subtopico: 'Conjuntos', dificuldade: 'baixa', indicadorQualidade: 40 }

  ];
  localStorage.setItem("db_videos", JSON.stringify(dbVideos));
  console.log(dbVideos);
}
else {
  dbVideos = JSON.parse(localStorage.getItem("db_videos"));
  console.log(dbVideos);
  console.log(Object.keys(dbVideos).length);
}

//Lista dos subtopicos por topico por matéria
//Eu deixei a importancia por enquanto caso agnt decida voltar com a implementação dela
const subtopicosPorTopico = {
  'Matemática': {
    'Álgebra': [
      { subtopico: 'Função', importancia: 'ALTA' },
      { subtopico: 'Inequação', importancia: 'MÉDIA' },
      { subtopico: 'Polinômios', importancia: 'BAIXA' }
    ],
    'Geometria': [
      { subtopico: 'Geometria Analítica', importancia: 'BAIXA' },
      { subtopico: 'Geometria Espacial', importancia: 'MÉDIA' },
      { subtopico: 'Geometria Plana', importancia: 'ALTA' }
    ],
    'Números': [
      { subtopico: 'Porcentagem', importancia: 'ALTA' },
      { subtopico: 'Logaritmos', importancia: 'BAIXA' },
      { subtopico: 'Conjuntos', importancia: 'MÉDIA' }
    ]
  }
};

//Constants
const videoHtmlpath = "videos.html";
const maxAllowedVideos = 8;

//Use of lodash lib for quick sorting
dbVideos = _.sortBy(dbVideos, function (o) { return o.indicadorQualidade; }).reverse();

///Get components
const materiaSelect = document.getElementById('materiaSelect');
const topicoSelect = document.getElementById('topicoSelect');
const subtopicoSelect = document.getElementById('subtopicoSelect');
const botaoPesquisar = document.getElementById('botaoPesquisar');
const divVideoDisplay = document.getElementById('recommendedVideos');

//Conteudo do filtro (nome da materia, topico, subtopico escolhido). Função -> FilterButton
let materiaSelecionada = materiaSelect.options[materiaSelect.selectedIndex].textContent;
let topicoSelecionado = topicoSelect.options[topicoSelect.selectedIndex].textContent;
let subtopicoSelecionado = subtopicoSelect.options[subtopicoSelect.selectedIndex].textContent;

//Events
materiaSelect.addEventListener('change', subtopicosSelection);
topicoSelect.addEventListener('change', subtopicosSelection);
botaoPesquisar.addEventListener('click', FilterButton);

function FilterButton() {
  materiaSelecionada = materiaSelect.options[materiaSelect.selectedIndex].textContent;
  topicoSelecionado = topicoSelect.options[topicoSelect.selectedIndex].textContent;
  subtopicoSelecionado = subtopicoSelect.options[subtopicoSelect.selectedIndex].textContent;
  displayFiltered();
};

function displayFiltered() {
  divVideoDisplay.innerHTML = "";//reset filter
  var arr = dbVideos.filter(function (o) {
    return (o.materia === materiaSelecionada || materiaSelecionada === "Matéria") &&
      (o.topico === topicoSelecionado || topicoSelecionado === "Assunto") &&
      (o.subtopico === subtopicoSelecionado || subtopicoSelecionado === "Subtopicos");
  })
  length = arr.length;
  if (length > maxAllowedVideos) length = maxAllowedVideos;
  for (var i = 0; i < arr.length; i++) {
    divVideoDisplay.innerHTML += `
      <div class="card">
        <div class="row no-gutters">
          <div class="col-4">
            <img class="card-img-top" src="//img.youtube.com/vi/${arr[i].link}/hqdefault.jpg" alt="Card image cap">
          </div>
          <div class="col-8"
            <div class="card-body">
              <h5 class="card-title">${arr[i].title}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p class="likes">Quantidade de likes: ${arr[i].indicadorQualidade}</p>
              <a href="${videoHtmlpath}?${arr[i].id}" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>`
  }
  if (divVideoDisplay.innerHTML == "") {
    divVideoDisplay.innerHTML = `<br><h5>Não foi possível encontrar nenhuma resultado. Procure outros conteúdos até concertamos este erro</h5>`;
  }
}


function subtopicosSelection() {
  //Adicionar valores para subtopicos
  //Se a matéria não for selecionada ele será nulo
  //Caso contrário ele será todas caso o topico seja 'TODAS' ou o topico escolhido

  const materiaSelecionada = materiaSelect.value;
  const topicoSelecionado = topicoSelect.options[topicoSelect.selectedIndex].textContent;
  //const dificuldadeSelecionada = importanciaSelect.value;

  subtopicoSelect.innerHTML = ''; //limpar o html antes de revisar o filtro novamente

  let subtopicosObject = [];
  let found = false;
  for (const materia in subtopicosPorTopico) { //Checar para cada matéria se possui os topicos
    if (subtopicosPorTopico[materia].hasOwnProperty(topicoSelecionado)) {
      found = true;
      subtopicosObject = subtopicosPorTopico[materia][topicoSelecionado];
      break;
      }
  }

  let trigger = false
  if (materiaSelecionada === '1' && found) {
    for (let i = 0; i < subtopicosObject.length; i++) {
      const subtopico = subtopicosObject[i];
      const subtopicoOption = document.createElement('option');
      subtopicoOption.textContent = subtopico.subtopico;
      subtopicoOption.value = subtopico.subtopico;
      subtopicoSelect.appendChild(subtopicoOption);
      trigger = true;

    }
  }
  
  if (trigger == false) {
    const subtopicoOption = document.createElement('option');
    subtopicoOption.textContent = 'selecione um subtópico';
    subtopicoOption.value = 'selecione um subtópico';
    subtopicoSelect.appendChild(subtopicoOption);
  }
}


displayFiltered();





