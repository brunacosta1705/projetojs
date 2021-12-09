async function cadastro() {

    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "nome": document.getElementById("inputName"),
        "sobrenome": document.getElementById("inputSurname"),
        "telefone": document.getElementById("inputTelefone"),
        "cpf": document.getElementById("inputCpf"),
        "email": document.getElementById("inputEmail"),
        "senha": document.getElementById("inputPassword4")
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