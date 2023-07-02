// Função para salvar os comentários no Local Storage
function saveComments() {
  localStorage.setItem('db_videos', JSON.stringify(db_videos));
  //localStorage.setItem('commentsData', JSON.stringify(commentsData));
}

// Função para carregar os comentários do Local Storage
function loadComments() {
  showComments();
}

function disableComments() {
  alert("Log in to comment")
  commentInput.readOnly = true;
  buttoncomentario.text = 'Entre para comentar';
}

// Função para exibir os comentários na tabela
function showComments() {
  var commentList = document.getElementById('listacomentario');
  commentList.innerHTML = '';

  db_videos[dbVidIndex].comentarios.forEach(function (comment) {
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
    console.log(db_videos[dbVidIndex].comentarios);
  });
}

// Função para adicionar um novo comentário
function addComment(event) {
  event.preventDefault();

  var nameInput = document.getElementById('inputnome');


  var newComment = {
    author: userData.nome,
    comment: commentInput.value,
    date: new Date().toISOString().split('T')[0]
  };


  db_videos[dbVidIndex].comentarios.push(newComment);
  console.log(db_videos[dbVidIndex].comentarios)
  saveComments();
  showComments();

  // Limpa os campos de entrada de texto
  nameInput.value = '';
  commentInput.value = '';
}

// Variável para armazenar os dados dos comentários

var db_videos = JSON.parse(localStorage.getItem("db_videos"));
var userDataJSON = sessionStorage.getItem("usuarioCorrente");
var userData;
var commentInput = document.getElementById('inputcomentario');
var buttoncomentario = document.getElementById('buttoncomentario');


console.log(userDataJSON);
if (!userDataJSON){
  disableComments();
}
else userData = JSON.parse(userDataJSON)
console.log(userData)
const queryString = window.location.search;
const idVideo = queryString.substring(1);
var dbVidIndex = -1;
for (var i = 0; i < db_videos.length; i++) {
  //console.log(db_videos[i]);
  if (db_videos[i].id === idVideo) {
    dbVidIndex = i;
    console.log("current index is:", db_videos[i]);
    //console.log(videoIframe.src);
    break;
  }
}

if (dbVidIndex > -1){

  // Carrega os comentários ao carregar a página
  window.addEventListener('load', function () {
    loadComments();
  });

  // Associa a função de adicionar comentário ao evento de envio do formulário
  var commentForm = document.getElementById('formcomentario');
  commentForm.addEventListener('submit', addComment);
}


//Save


var saveButton = document.getElementById("saveButton");
var savedButton = document.getElementById("savedButton");
var debug = document.getElementById("debug");
var usersJSON = localStorage.getItem("db_usuarios");
var users;
var dbUsersIndex = 0;
if (usersJSON){
  
  users = JSON.parse(usersJSON);
  for (var i = 0; i < users.usuarios.length; i++) {
    //console.log(db_videos[i]);
   
     console.log(userData.id)
     console.log(users.usuarios[i].id)
    if (users.usuarios[i].id === userData.id) {
      dbUsersIndex = i;
      console.log("current dbUsersIndex", users.usuarios[i]);
      break;
    }
  }
}
var checkIfSaved = false;
for (var i = 0; i < users.usuarios[dbUsersIndex].saved.length; i++) {
  if (users.usuarios[dbUsersIndex].saved[i] === db_videos[dbVidIndex].link) {
    checkIfSaved = true;
    break;
  }
}
if (checkIfSaved) saveButton.style.display = 'none';
else savedButton.style.display = 'none';

saveButton.addEventListener('click', saveContent);
savedButton.addEventListener('click', unsaveContent);
debug.addEventListener('click', debugGER)
function debugGER(){
  console.log(users.usuarios[dbUsersIndex].saved) 
}
function saveContent(){
  saveButton.style.display = 'none';
  savedButton.style.display = 'inline';
  var newSaved = db_videos[dbVidIndex].link;
  console.log(newSaved);
  users.usuarios[dbUsersIndex].saved.push(newSaved);
  console.log(users.usuarios[dbUsersIndex].saved)
  
  var newLiked = db_videos[dbVidIndex].link;
  console.log(newLiked);
  users.usuarios[dbUsersIndex].liked.push(newLiked);
  console.log(users.usuarios[dbUsersIndex].liked)

  localStorage.setItem('db_usuarios',JSON.stringify(users))
}

function unsaveContent(){
  saveButton.style.display = 'inline';
  savedButton.style.display = 'none';
  for (var i = 0; i < users.usuarios[dbUsersIndex].saved.length; i++) {
    console.log(users.usuarios[dbUsersIndex].saved[i]);
    console.log(db_videos[dbVidIndex].link)
    if (users.usuarios[dbUsersIndex].saved[i] === db_videos[dbVidIndex].link) {
      console.log("antes", users.usuarios[dbUsersIndex].saved);
      delete users.usuarios[dbUsersIndex].saved[i];
      console.log("depois", users.usuarios[dbUsersIndex].saved);
      break;
    }
  }

  for (var i = 0; i < users.usuarios[dbUsersIndex].liked.length; i++) {
    if (users.usuarios[dbUsersIndex].liked[i] === db_videos[dbVidIndex].link) {
      console.log("antes", users.usuarios[dbUsersIndex].liked);
      delete users.usuarios[dbUsersIndex].liked[i];
      console.log("depois", users.usuarios[dbUsersIndex].liked);
      break;
    }
  }
  localStorage.setItem('db_usuarios',JSON.stringify(users))

}
