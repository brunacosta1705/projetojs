async function cadastro() {

    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "nome": document.getElementById("nomeid").value,
        "sobrenome": document.getElementById("sobrenomeid").value,
        "telefone": document.getElementById("telefoneid").value,
        "cpf": document.getElementById("cpfid").value,
        "email": document.getElementById("emailid").value,
        "senha": document.getElementById("senhaid").value
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:5987/cadastro", requestOptions)
        .then(response => response.json())
        .then(result => {
            alert(JSON.stringify(result.responseMessage));
        })
        .catch(error => console.log('error', error));

}

async function login() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "login": document.getElementById("loginlogid").value,
        "senha": document.getElementById("senhalogid").value
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:5987/login", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.status == 1) {
                window.open('home.html')
            } else {
                alert(result.responseMessage)
            }
        })
        .catch(error => console.log('error', error))
}