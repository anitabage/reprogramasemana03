//3 Crie um algoritmo que receba três notas de um aluno, 
//calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

//  - Se a media for igual ou maior que 7 - Aprovado
//  - Se a media for maior e igual a cinco e menor que 7 - Recuperação
//  - Se a media for menor que 5 - Reprovado

function mediaAluna (nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3)/ 3
 if (media >= 7 && media <= 10) {
    return `Você está aprovada, sua nota é ${media}`
} else if (media >= 5 && media < 7) {
    return `Você está de recuperação, sua nota é ${media}`
} else if (media < 5 >=0) {
    return `Você está reprovada, sua nota é ${media}`
}
}

console.log(mediaAluna(7, 6, 8)) //Você está aprovada, sua nota é 7
console.log(mediaAluna(5, 6, 4)) //Você está de recuperação, sua nota é 5
console.log(mediaAluna(3, 5, 1)) //Você está reprovada, sua nota é 3