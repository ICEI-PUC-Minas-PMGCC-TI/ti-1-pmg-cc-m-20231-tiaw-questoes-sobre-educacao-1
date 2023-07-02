function openModal() {
  var modal = document.getElementById("myAccountModal");
  modal.style.display = "block";
}
window.onclick = function (event) {
  var modal = document.getElementById("myAccountModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function logout() {
  // Aqui você pode adicionar a lógica para realizar o logout, como fazer uma requisição ao servidor ou limpar os dados do localStorage
  alert("Logout realizado com sucesso!");
  // Redirecionar para a página de login
  window.location.href = "index.html";
}
// Recuperar os dados do login
var loginInfo = localStorage.getItem("loginInfo");

// Verificar se os dados foram encontrados
if (loginInfo) {
  // Converter os dados de volta para um objeto JavaScript
  var loginData = JSON.parse(loginInfo);

  // Exibir as informações na página do usuário
  document.getElementById("name").textContent = loginData.name;
  document.getElementById("username").textContent = loginData.username;
  document.getElementById("email").textContent = loginData.email;

  // Adicione mais elementos HTML conforme necessário
} else {
  // Caso os dados não sejam encontrados, tratar o caso adequadamente
  console.log("Dados de login não encontrados no localStorage.");
}

function exibeUsuarios() {

  // Popula a tabela com os registros do banco de dados
  let listaUsuarios = '';
  for (i = 0; i < db_usuarios.usuarios.length; i++) {
    let usuario = db_usuarios.usuarios[i];
    listaUsuarios += `<tr><td scope="row">${usuario.nome}</td><td>${usuario.login}</td><td>${usuario.email}</td></tr>`;
  }

}
// Função para esconder o botão de "Minha Conta" quando estiver deslogado
function hideMyAccountButton() {
  var myAccountButton = document.querySelector("#myAccountButton");

  if (myAccountButton) {
    myAccountButton.style.display = "none";
  }
}

// Função para esconder os botões de "Login" e "Criar conta" quando estiver logado
function hideLoginCreateButtons() {
  var loginButton = document.querySelector(".login");
  var createButton = document.querySelector(".create");

  if (loginButton) {
    loginButton.style.display = "none";
  }

  if (createButton) {
    createButton.style.display = "none";
  }
}

window.addEventListener("load", checkUserStatus);

function toggleMenu() {
  var menu = document.getElementById("navMenu");
  menu.classList.toggle("open");
}

function closeMenu() {
  var menu = document.getElementById("navMenu");
  menu.classList.remove("open");
}

window.addEventListener("resize", closeMenu);

