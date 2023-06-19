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
        window.location.href = "../Homepage/homepage.html";
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
      
      // Verificar se o usuário está logado ou deslogado e ocultar os botões apropriados
      function checkUserStatus() {
        var isLoggedIn = false; // Coloque aqui a lógica para verificar se o usuário está logado
        
        if (isLoggedIn) {
          hideLoginCreateButtons();
        } else {
          hideMyAccountButton();
        }
      }
      
      // Chamar a função de verificação quando a página for carregada
      window.addEventListener("load", checkUserStatus);
      


