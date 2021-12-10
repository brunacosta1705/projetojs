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