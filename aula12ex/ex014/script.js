function carregar() {
    let hours = document.getElementById('hours')
    let imagem = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    if (hora > 0 && hora < 12) {
        hours.innerHTML = `Bom dia!<br> Agora são ${hora} horas.`
        imagem.src = "imagens/sunrise-200.jpg";
        document.body.style.background = '#e2cd9f'
    } else if (hora >=12 && hora < 18) {
        hours.innerHTML = `Boa tarde!<br> Agora são ${hora} horas.`
        imagem.src = 'imagens/tarde-200.jpg';
        document.body.style.background = '#b9846f'
    } else {
        hours.innerHTML = `Boa noite!<br> Agora são ${hora} horas.`
        imagem.src = 'imagens/night-200.jpg';
        document.body.style.background = '#515154'
    }

    
}