function verificar() {
    let ano = document.getElementById("txtano");
    let result = document.getElementById("res");
    let data = new Date();
    let nascimento = Number(ano.value);
    let idade = data.getFullYear() - nascimento;
    let sexo = document.getElementsByName('txtsex');
    let img = document.createElement("img");
    img.setAttribute('id', 'foto')
    if (ano.value == 0 || ano.value > data.getFullYear()) {
        res.innerHTML = "Dados inconsistentes. Verifique os dados e tente novamente!"
    } else if (sexo[0].checked) {
        if (idade >=0 && idade < 12) {
            img.setAttribute('src', 'imagens/manC.png');
        } else if (idade < 21) {
            img.setAttribute('src', 'imagens/manY.png');
        } else if (idade < 60) {
            img.setAttribute('src', 'imagens/manA.png');
        } else {
            img.setAttribute('src', 'imagens/manO.png');
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Você é um homem de ${idade} anos.`
        res.appendChild(img);
    } else {
        if (idade >=0 && idade < 12) {
            img.setAttribute('src', 'imagens/womanC.png');
        } else if (idade < 21) {
            img.setAttribute('src', 'imagens/womanY.png');
        } else if (idade < 60) {
            img.setAttribute('src', 'imagens/womanA.png');
        } else {
            img.setAttribute('src', 'imagens/womanO.png');
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Você é uma mulher de ${idade} anos.`
        res.appendChild(img);
    }
    //verificando a idade


}