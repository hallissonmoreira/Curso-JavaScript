function contar() {
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')
    
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Faltam dados!');
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = "Contando: <br>" 
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        let j;
        if (p <= 0) {
            alert('Impossível contar! O valor do passo deve ser maior do que 0')
            res.innerHTML = 'Impossível contar!'
        } else {
            if ( i < f) {
                for ( j = i; j <= f; j += p) {
                    res.innerHTML += `\u{1F449} ${j}  ` ;
                }
                
            } else {
                for ( j = i; j >= f; j -= p) {
                    res.innerHTML += `\u{1F449} ${j}  ` ;
                }
            }
            res.innerHTML += `\u{1F3C1}`   
        }
    }
}