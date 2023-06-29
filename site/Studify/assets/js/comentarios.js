// Função para salvar os comentários no Local Storage
function saveComments() {
    localStorage.setItem('commentsData', JSON.stringify(commentsData));
  }
  
  // Função para carregar os comentários do Local Storage
  function loadComments() {
    var storedComments = localStorage.getItem('commentsData');
    if (storedComments) {
      commentsData = JSON.parse(storedComments);
      showComments();
    }
  }
  
  // Função para exibir os comentários na tabela
  function showComments() {
    var commentList = document.getElementById('listacomentario');
    commentList.innerHTML = '';
  
    commentsData.forEach(function(comment) {
      var row = document.createElement('tr');
      var authorCell = document.createElement('td');
      authorCell.textContent = comment.author;
      var commentCell = document.createElement('td');
      commentCell.textContent = comment.comment;
      var dateCell = document.createElement('td');
      dateCell.textContent = comment.date;
  
      row.appendChild(authorCell);
      row.appendChild(commentCell);
      row.appendChild(dateCell);
  
      commentList.appendChild(row);
    });
  }
  
  // Função para adicionar um novo comentário
  function addComment(event) {
    event.preventDefault();
  
    var nameInput = document.getElementById('inputnome');
    var commentInput = document.getElementById('inputcomentario');
  
    var newComment = {
      author: nameInput.value,
      comment: commentInput.value,
      date: new Date().toISOString().split('T')[0]
    };
  
    commentsData.push(newComment);
  
    saveComments();
    showComments();
  
    // Limpa os campos de entrada de texto
    nameInput.value = '';
    commentInput.value = '';
  }
  
  // Variável para armazenar os dados dos comentários
  var commentsData = [];
  
  // Carrega os comentários ao carregar a página
  window.addEventListener('load', function() {
    loadComments();
  });
  
  // Associa a função de adicionar comentário ao evento de envio do formulário
  var commentForm = document.getElementById('formcomentario');
  commentForm.addEventListener('submit', addComment);
  