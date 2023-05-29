//primeira versão
var nome = 'Fulano';
var nome2 = 'Beltrano';
var nota = 8;
var nota2 = 5;
const NOTA_CORTE = 6;

//candidato 1
console.log('Nome do candidato: '+ nome);
if (nota < NOTA_CORTE){
    console.log('Reprovado');
} else {
    console.log('Aprovado');
}

//verificar o candidato 2
console.log('Nome do candidato: '+ nome2);
if (nota2 < NOTA_CORTE){
    console.log('Reprovado');
} else {
    console.log('Aprovado');
}
