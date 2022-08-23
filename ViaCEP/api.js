function consultaCEP(){
    let cep = document.getElementById('textCEP').value
    if (cep.length != 8){
        alert('CEP inválido!')
    }
    var url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url).then(function(response){
        response.json().then(function(data){
        mostrarEndereco(data);})
    })
}

function mostrarEndereco(data){
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `<p>Logradouro: ${data.logradouro}</p>
                           <p>Bairro: ${data.bairro}</p>
                           <p>Cidade: ${data.localidade} - ${data.uf}</p>`
}