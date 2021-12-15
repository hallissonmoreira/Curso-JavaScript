let vetor = []
/* 
    Validações da aplicação:
        1. O valor digitado deve ser >= 1 && <= 100.
        2. Um mesmo valor não poderá ser adicionado mais de uma vez.
        3. O campo de número não pode estar vazio quando o botão de adicionar for clicado.

*/
// Validação 01
function verifNumber(n) {
    if(n >= 1 && n <= 100) {
        return true;
    } else {
        return false;
    }
}

// Validação 02
function wasAdded(n, v) {
    if(v.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
} 

// Bloco de adição do valor
function adicionar() {
    //let n = Number(document.getElementById('fnum').value)
    let n = document.getElementById('fnum')
    let lista = document.getElementById('flista')
    
    if (verifNumber(n.value) && !wasAdded(n.value, vetor)) {
        let item = document.createElement('option')
        item.text = `Valor ${n.value} adicionado.`
        lista.appendChild(item)
        vetor.push(Number(n.value))
        res.innerHTML = ''
    } else if (wasAdded(n.value, vetor)) {
        alert('Esse valor já foi inserido! Digite outro valor!')
    } else if (!verifNumber(n.value)) {
        alert('O valor digitado não é válido!')
    }
    n.value = ''
    n.focus()
}

// Bloco de resultado da análise
/*
    As análises a serem realizadas são:
        1. Ao todo temos "x" números cadastrados;
        2. O maior valor informado foi "x" e ele está na posição vetor.indexOf(x);
        3. O menor valor informado foi "x" e ele está na posição vetor.indexOf(x);
        4. A soma de todos os valores informados é de...;
        5. A média dos valores informados é de...;
*/
function finalizar() {
    let res = document.getElementById('res')
    let soma = 0;  
    if (vetor.length == 0) {
        alert('Nenhum valor foi adicionado!')
    } else {
        for (let i = 0; i < vetor.length-1; i++) {
            for (let j = i+1; j < vetor.length; j++) {
                if(vetor[i] > vetor[j]) {
                    let aux = vetor[i]
                    vetor[i] = vetor[j];
                    vetor[j] = aux;
                }
            }
    
        }
    
        for(let c = 0; c < vetor.length; c++) {
            soma += vetor[c]
            
        }
        let media = (soma / vetor.length).toFixed(2).replace('.',',')
        let q = vetor.length
        
        res.innerHTML = `<p>Ao todo temos <strong>${q}</strong> números cadastrados;</p>`
        res.innerHTML += `<p>O maior valor informado foi <strong>${vetor[q-1]}</strong> e ele está na posição <strong>${vetor.indexOf(vetor[q-1])}</strong>;</p>`
        res.innerHTML += `<p>O menor valor informado foi <strong>${vetor[0]}</strong> e ele está na posição <strong>${vetor.indexOf(vetor[0])}</strong>;</p>`
        res.innerHTML += `<p>A soma de todos os valores informados é de <strong>${soma}</strong>;</p>`
        res.innerHTML += `<p>A média dos valores informados é de <strong>${media}</strong>.</p>`
    }
        
}
   
    