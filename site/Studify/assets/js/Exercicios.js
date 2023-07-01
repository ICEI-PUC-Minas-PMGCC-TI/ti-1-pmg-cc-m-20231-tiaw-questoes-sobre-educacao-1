document.addEventListener("DOMContentLoaded", () => {
  CheckInternalStorage();

  const scrollToSection = () => {
    const resposta1 = document.getElementById("resposta1");
    resposta1.scrollIntoView({ behavior: "smooth" });
  };

  const button = document.getElementById("scrollButton");
  if (button) {
    button.addEventListener("click", scrollToSection);
  }

  const estrelas = document.querySelectorAll(".estrela");
  let totalCliques = 0;
  let totalEstrelas = 0;
  let somanotas = 0;
  let ultimoClique = 0;
  const votosPorBotao = new Map();

  estrelas.forEach(function(estrela, index) {
    const contador = estrela.nextElementSibling;
    contador.textContent = index === 1 || index === estrelas.length - 1 ? "0" : "0";

    estrela.addEventListener("click", function() {
      const pessoaAtual = "pessoa1"; // substitua "pessoa1" pelo identificador único da pessoa

      // Verifica se a pessoa já votou nesse botão
      if (votosPorBotao.has(index) && votosPorBotao.get(index) === pessoaAtual) {
        return; // Impede que a pessoa vote novamente no mesmo botão
      }

      const contadorAtual = parseInt(contador.textContent);

      // Reduz o contador do último clique em 1, se for maior que zero
      if (ultimoClique !== index && parseInt(estrelas[ultimoClique].nextElementSibling.textContent) > 0) {
        const contadorAnterior = parseInt(estrelas[ultimoClique].nextElementSibling.textContent);
        estrelas[ultimoClique].nextElementSibling.textContent = contadorAnterior - 1;
      }

      contador.textContent = contadorAtual + 1;
      totalCliques++;
      totalEstrelas += contadorAtual + 1;

      somanotas = 0; // Zera a soma de notas

      // Calcula a soma de todos os contadores
      estrelas.forEach(function(estrela) {
        const contador = estrela.nextElementSibling;
        somanotas += parseInt(contador.textContent);
      });

      const media = somanotas !== 0 ? totalEstrelas / somanotas : 0;
      console.log("Botão da estrela clicado:", index + 1);
      

      // Atualiza o valor do último clique
      ultimoClique = index;

      // Armazena o voto da pessoa para o botão atual
      votosPorBotao.set(index, pessoaAtual);
    });
  });

  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const emailInput = document.getElementById("emailInput");
      const email = emailInput.value;
      if (validateEmail(email)) {
        const emailObject = {
          email: email
        };

        const jsonData = JSON.stringify(emailObject);
        console.log(jsonData);
        saveEmail(email);
      } else {
        alert("Por favor, insira um endereço de email válido.");
      }
    });
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function saveEmail(email) {
    let emails = [];
    if (localStorage.getItem("emails")) {
      emails = JSON.parse(localStorage.getItem("emails"));
    }
    emails.push(email);
    localStorage.setItem("emails", JSON.stringify(emails));
    alert("Email cadastrado com sucesso!");
  }
});

function CheckInternalStorage() {
  const avaliacoes = {
    usuario1: {
      artigo1: {
        nota: 2
      }
    },
    usuario2: {
      artigo1: {
        nota: 5
      }
    }
  };

  let somanotas = 0;
  let medianotas = 0;

  for (const usuario in avaliacoes) {
    const usuarioID = usuario;
    const artigoID = Object.keys(avaliacoes[usuario])[0];
    const nota = avaliacoes[usuario][artigoID].nota;

    somanotas += nota;
  }

  medianotas = somanotas / Object.keys(avaliacoes).length;

  const medianotasElement = document.getElementById("medianotas");
  if (medianotasElement) {
    medianotasElement.textContent = medianotas.toFixed(2);
  }
}
