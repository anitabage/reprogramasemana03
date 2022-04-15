//6 crie um algoritmo que converte dias em horas, 
//quando recebe um número de dias.

function converteDiaEmHora (dias) {
    const horasPorDia = dias * 24
    return `${dias} dias equivalem a ${horasPorDia} horas`
}

console.log(converteDiaEmHora(7))// 7 dias equivalem a 168 horas