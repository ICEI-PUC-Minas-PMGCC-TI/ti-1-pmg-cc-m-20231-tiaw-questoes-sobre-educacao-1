document.getElementById("newsletterForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("emailInput").value;
    if (validateEmail(email)) {
        var emailObject = {
            email: email
        };

        var jsonData = JSON.stringify(emailObject);
        console.log(jsonData);

        saveEmail(email);
    } else {
        alert("Por favor, insira um endereço de email válido.");
    }
});

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function saveEmail(email) {

    var emails = [];
    if (localStorage.getItem("newsletterEmails")) {
        emails = JSON.parse(localStorage.getItem("newsletterEmails"));
    }
    emails.push(email);
    localStorage.setItem("newsletterEmails", JSON.stringify(emails));


    alert("Email cadastrado em nosso Newsletter com sucesso!");
}
