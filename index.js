let vitorias = 75
let derrotas = 10

let saldoVitorias = calcularSaldo(vitorias,derrotas)
let nivel = obterNivel(saldoVitorias)

console.log("O Herói tem de saldo de "+ saldoVitorias + " e está no nível de " + nivel)

function calcularSaldo(vitorias, derrotas){
    return vitorias-derrotas
}

function obterNivel(saldo) {
    if (saldo <= 10){
        return "Ferro"
    }
    else if (saldo > 10 &&  saldo <=20){
        return "Bronze"
    }
    else if (saldo > 20 &&  saldo <=50){
        return "Prata"
    }
    else if (saldo > 50 &&  saldo <=80){
        return "Ouro"
    }
    else if (saldo > 80 &&  saldo <=90){
        return "Diamante"
    }
    else if (saldo > 90 &&  saldo <=100){
        return "Lendário"
    }
        else if (saldo > 100){
        return "Imortal"
    }

}

