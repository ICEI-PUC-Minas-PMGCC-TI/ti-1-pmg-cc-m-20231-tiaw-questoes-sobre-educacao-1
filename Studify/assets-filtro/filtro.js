const subtopicosPorTopico = {
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
  };
  
  function filtrar() {
    const materiaSelect = document.getElementById('materiaSelect');
    const topicoSelect = document.getElementById('topicoSelect');
    const importanciaSelect = document.getElementById('importanciaSelect');
    const subtopicoSelect = document.getElementById('subtopicoSelect');
  
    const materiaSelecionada = materiaSelect.value;
    const topicoSelecionado = topicoSelect.options[topicoSelect.selectedIndex].textContent;
    const dificuldadeSelecionada = importanciaSelect.value;
  
    subtopicoSelect.innerHTML = '';
  
    if (materiaSelecionada === '1' && subtopicosPorTopico.hasOwnProperty(topicoSelecionado)) {
      const subtopicos = subtopicosPorTopico[topicoSelecionado];
  
      for (let i = 0; i < subtopicos.length; i++) {
        const subtopico = subtopicos[i];
  
        if (subtopico.importancia === dificuldadeSelecionada || dificuldadeSelecionada === 'TODAS') {
          const subtopicoOption = document.createElement('option');
          subtopicoOption.textContent = subtopico.subtopico;
          subtopicoOption.value = subtopico.subtopico;
          subtopicoSelect.appendChild(subtopicoOption);
        }
      }
    }
  }
  
  const materiaSelect = document.getElementById('materiaSelect');
  materiaSelect.addEventListener('change', filtrar);
  
  const topicoSelect = document.getElementById('topicoSelect');
  topicoSelect.addEventListener('change', filtrar);
  
  const importanciaSelect = document.getElementById('importanciaSelect');
  importanciaSelect.addEventListener('change', filtrar);

  const botaoPesquisar = document.getElementById('botaoPesquisar');

botaoPesquisar.addEventListener('click', function () {
  const materiaSelecionada = materiaSelect.options[materiaSelect.selectedIndex].textContent;
  const topicoSelecionado = topicoSelect.options[topicoSelect.selectedIndex].textContent;
  const dificuldadeSelecionada = importanciaSelect.options[importanciaSelect.selectedIndex].textContent;
  const subtopicoSelecionado = subtopicoSelect.options[subtopicoSelect.selectedIndex].textContent;

  const mensagem = `Você pesquisou a matéria ${materiaSelecionada}, tópico ${topicoSelecionado}, dificuldade ${dificuldadeSelecionada}, subtópico ${subtopicoSelecionado}.`;

  alert(mensagem);
});

  
  
  
  