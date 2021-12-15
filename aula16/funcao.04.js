
function fatorial(n) {
    let produto = 1;    
    for(let i = n; i >= 1; i--) {
        produto *= i
    }
    return produto
}

console.log(fatorial(6))

console.log(fatorial(3))