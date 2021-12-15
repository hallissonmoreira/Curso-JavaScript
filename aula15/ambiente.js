let vetor = [0, 3, 9, 4, 5, 24, 72, 84,]
/*
for ( let i = 0; i < vetor.length-1; i++) {
    for( let j = i+1; j < vetor.length; j++) {
        if (vetor[i] > vetor[j]) {
            let aux = vetor[i]
            vetor[i] = vetor[j]
            vetor[j] = aux
        }
    }
}

console.log(vetor)


for (let i in vetor) {
    console.log(`Na posição ${i} temos os valor ${vetor[i]}`)
}
*/
let n = 720;
if(vetor.indexOf(n) == -1) {
    console.log(`O valor ${n} não foi encontrado no vetor.`)
} else {
    console.log(`O valor ${n} está na posição ${vetor.indexOf(n)}`)
}


