//2 Elabore um algoritmo que receba dois números e determine 
//qual é o maior entre eles, se os números forem iguais, mostre
//uma mensagem no console "Os números são iguais".

function comparaNumeros (num1, num2) {
    if (num1 > num2) {
        return `${num1} é maior que ${num2}`
    } else if (num1 < num2) {
        return `${num1} é menor que ${num2}`
    } else if (num1 === num2) {
        return `${num1} e ${num2} são iguais`
    }
}


console.log(comparaNumeros(30, 12))//34 é maior que 12
console.log(comparaNumeros(10, 54))//10 é menor que 54
console.log(comparaNumeros(40, 40))//40 e 40 são iguais
