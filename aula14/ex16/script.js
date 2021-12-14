function contar() {
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    let j;
    
    
    
    if (i == 0 || f == 0 || p == 0) {
        alert('Favor preencher todos os campos! ')
        
    } else {
        for ( j = i; j <= f; j++ ) {
            res.innerHTML = `<span>${j}</span>`;
        }
    }
    
}