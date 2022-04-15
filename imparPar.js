//4 Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function parOuImpar (numero) {
    if (numero % 2 == 0) {
        return `O número ${numero} é par`
    } else if (numero % 2 != 0) {
        return `O número ${numero} é impar`
    }
}

console.log(parOuImpar(6)) // O número 6 é par
console.log(parOuImpar(9)) // O número 9 é impar