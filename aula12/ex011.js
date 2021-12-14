let idade = 22
if (idade < 16) {
    console.log('Você não pode votar!');
} else if (idade < 18 || idade > 65) {
    console.log('O voto é opcional!');
} else {
    console.log('O voto é obrigatório!');
}
