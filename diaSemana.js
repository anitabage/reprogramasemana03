//1 Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

function diaSemana (dia) {
    if (dia == 1) {
        return 'É domingo'
    } else if (dia == 2) {
        return 'É segunda-feira'
    } else if (dia == 3) {
        return 'É terça-feira'
    } else if (dia == 4) {
        return 'É quarta-feira'
    } else if (dia == 5) {
        return 'É quinta-feira'
    } else if (dia == 6) {
        return 'É sexta-feira'
    } else if (dia == 7) {
        return 'É sábado'
    } else {
        return 'Não é um dia da semana'
    }
}
console.log(diaSemana('1')) //É domingo
console.log(diaSemana('2')) //É segunda-feira
console.log(diaSemana('3')) //É terça-feira
console.log(diaSemana('5')) //É quarta-feira
console.log(diaSemana('6')) //É quinta-feira
console.log(diaSemana('7')) //É sábado