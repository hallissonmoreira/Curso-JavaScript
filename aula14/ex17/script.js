function gerarTabuada() {
    let n = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')
    
    if (n.value.length == 0) {
        alert('Por favor digite um número!')
    } else {
        let number = Number(n.value)
        tab.innerHTML = ''
        for ( let i = 0; i < 10; i++ ) {
            let item = document.createElement('option')
            item.text = ` ${number} x ${i} = ${number*i}`
            tab.appendChild(item)
        }
    }
}