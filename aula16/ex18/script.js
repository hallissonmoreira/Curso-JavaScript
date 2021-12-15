/* 
    Validações da aplicação:
        1. O valor digitado deve ser >= 1 && <= 100.
        2. Um mesmo valor não poderá ser adicionado mais de uma vez.
        3. O campo de número não pode estar vazio quando o botão de adicionar for clicado.

*/
// validação 01
function inList(n,l) {
    if(l.indexOf(Number(n)) == -1){
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    let n = document.getElementById('fnum')
    let l = document.getElementById('flista')
    let res = document.getElementById('res')
    let valores = [];
    let v1 = Number(n.value) >= 1 && Number(n.value) <= 100;
    
    
    if(v1 && inList(Number(n.value),valores)) {
        valores.push(Number(n.value))
        let item = document.createElement('option')
        item.text = `Valor ${n.value} adicionado`
        l.appendChild(item)
        
    } else {
        alert("Valor inválido ou já adicionado!")
    }
    n.value = ''
    n.focus()
}