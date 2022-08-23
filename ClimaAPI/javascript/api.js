function buscarClima(){
    let cidade = document.getElementById('cidade').value
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&APPID=c53f3ba864ef5a8c4351fd479d9fb02b&units=metric`

    fetch(url).then(function(response){
        console.log(response)
        response.json().then(function(data){
            console.log(data)
            mostrarClima(data);
        })
    })
}

function mostrarClima(data){
    let cidade = document.getElementById('cidade').value
    let resultado = document.getElementById('resultado')
    let background = document.getElementById('background')
    let section = document.getElementById('container')
    let clima = data.weather[0].main

    //  Resultados

    resultado.innerHTML = `<h2>${cidade.charAt(0).toUpperCase() + cidade.slice(1)}</h2>
                           <p>${data.weather[0].main}</p>
                           <p>${data.main.temp}°C</p>`


    // Mudando CSS 
    section.className = clima
    background.className = clima + 'BG'
}
