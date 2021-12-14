function gerarTabuada() {
    let n = document.getElementById('txtnum')
    let res = document.getElementById('res')
    let number = Number(n.value)
    
    
    for ( let i = 0; i < 10; i++ ) {
        let produto = i * number;
        res.innerHTML = ` ${number} x ${i} = ${produto}.<br>`
    }    

}