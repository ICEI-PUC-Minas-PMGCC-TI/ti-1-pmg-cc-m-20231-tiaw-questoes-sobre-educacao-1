function openModal() {
  modal.style.display = "block";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function logout() {
  usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
  if (usuarioCorrenteJSON){
    sessionStorage.clear('usuarioCorrente')
    alert("Logout realizado com sucesso!");
    window.location.href = "index.html";
  }
  else alert("Usuario não logado");
  // Aqui você pode adicionar a lógica para realizar o logout, como fazer uma requisição ao servidor ou limpar os dados do localStorage
  
}

function exibeUsuarios() {
  if ((usuarioCorrenteJSON)){
    modalEmail.textContent = usuarioCorrente.email;
    modalName.textContent = usuarioCorrente.nome;
    modalUsername.textContent = usuarioCorrente.login;
  }
  else  console.log("Dados de login não encontrados no localStorage.");
  
  /*
  // Popula a tabela com os registros do banco de dados
  let listaUsuarios = '';
  for (i = 0; i < db_usuarios.usuarios.length; i++) {
    let usuario = db_usuarios.usuarios[i];
    listaUsuarios += `<tr><td scope="row">${usuario.nome}</td><td>${usuario.login}</td><td>${usuario.email}</td></tr>`;
  }
  */

  // Substitui as linhas do corpo da tabela
  //document.getElementById("table-usuarios").innerHTML = listaUsuarios

}
// Recuperar os dados do login


// Função para esconder o botão de "Minha Conta" quando estiver deslogado
function hideMyAccountButton() {
  var myAccountButton = document.querySelector("#myAccountButton");

  if (myAccountButton) {
    myAccountButton.style.display = "none";
  }
}

// Função para esconder os botões de "Login" e "Criar conta" quando estiver logado
/*
function hideLoginCreateButtons() {
  var loginButton = document.querySelector(".login");
  var createButton = document.querySelector(".create");

  if (loginButton) {
    loginButton.style.display = "none";
  }

  if (createButton) {
    createButton.style.display = "none";
  }
}*/

//window.addEventListener("load", checkUserStatus); Comando não adicionado 

function toggleMenu() {
  var menu = document.getElementById("navMenu");
  menu.classList.toggle("open");
}

function closeMenu() {
  var menu = document.getElementById("navMenu");
  menu.classList.remove("open");
}



function initModal(){
  
  usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
  if (usuarioCorrenteJSON) {
      usuarioCorrente = JSON.parse(usuarioCorrenteJSON);
  }
  exibeUsuarios()
  headerDisplay()
}
var adminButton = document.getElementById("adminButton");
var navCreateAccBtn = document.getElementById("navCreateAccBtn");
var navLoginBtn = document.getElementById("navLoginBtn");
var myAccountButton = document.getElementById("myAccountButton");
var modal = document.getElementById("myAccountModal");
var loginInfo = localStorage.getItem("db_usuarios");
window.addEventListener("resize", closeMenu);
var modalEmail = document.getElementById("modalEmail");
var modalUsername = document.getElementById("modalUsername");
var modalName = document.getElementById("modalName");
var usuarioCorrente;
var usuarioCorrenteJSON;
function headerDisplay(){
  adminButton.style.display = 'none';
  if (usuarioCorrenteJSON){
    navCreateAccBtn.style.display = 'none';
    navLoginBtn.style.display = 'none';
    if (usuarioCorrente.login === 'admin') adminButton .style.display = 'inline';
  }
  else myAccountButton.style.display = 'none';
}
initModal();