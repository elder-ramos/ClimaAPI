    let data = new Date();
    let hora = data.getHours();

    let img = document.createElement('img')
    img.setAttribute('id', 'horarioFoto')

    let background = document.getElementById('background')
    let resposta = document.getElementById('resposta')
    let divHora = document.getAnimations('inHora')

    if(hora >= 6 && hora <= 11){
        //Manhã
        img.setAttribute('src', 'img/manha.jpg')
        background.className = 'manha'

    }else if(hora >= 12 && hora <= 17){
        //Tarde
        img.setAttribute('src', 'img/tarde.jpg')
        background.className = 'tarde'
    }else if(hora >= 18 && hora <= 23){
        //Noite
        img.setAttribute('src', 'img/noite.jpg')
        background.className = 'noite'
    }
    else{
        //Madrugada
        background.className = 'madrugada'
        img.setAttribute('src', 'img/madrugada.jpg')
    }
    resposta.innerHTML = `Agora são ${hora} horas.`
    foto.appendChild(img)