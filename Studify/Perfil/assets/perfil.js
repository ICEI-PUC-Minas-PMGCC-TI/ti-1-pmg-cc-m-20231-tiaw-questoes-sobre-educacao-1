// Função JavaScript para realizar o logout
function logout() {
  // Aqui você pode adicionar a lógica para realizar o logout, como fazer uma requisição ao servidor ou limpar os dados do localStorage
  alert("Logout realizado com sucesso!");
  // Redirecionar para a página de login
  window.location.href = "login.html";
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
