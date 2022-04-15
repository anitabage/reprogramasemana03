//7  Crie uma função que recebe 2 parâmetros e retorna o resultado 
//da divisão entre eles. Além disso, se o resto dessa divisão for zero 
//deverá imprimir no console o valor e dizer que ele é par.

function divideNumero (num1, num2) {
    const divisao = num1 / num2
    console.log(`O resultado da divisão entre ${num1} e ${num2} é ${divisao}`)
    if (divisao % 2 === 0) {
      return `${divisao} é par.`;
    } else {
    return `${divisao} é impar`;
}  
}

console.log(divideNumero(40, 2))//O resultado da divisão entre 20 e 2 é 10. 10 é par
console.log(divideNumero(50, 2))//O resultado da divisão entre 50 e 2 é 25. 25 é impar