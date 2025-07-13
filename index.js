let vitorias = 75
let derrotas = 10

let saldoVitorias = calcularSaldo(vitorias,derrotas)
let nivel = obterNivel(vitorias)

console.log("O Herói tem de saldo de "+ saldoVitorias + " e está no nível de " + nivel)

function calcularSaldo(vitorias, derrotas){
    return vitorias-derrotas
}

function obterNivel(vitorias) {
    if (vitorias <= 10){
        return "Ferro"
    }
    else if (vitorias > 10 &&  vitorias <=20){
        return "Bronze"
    }
    else if (vitorias > 20 &&  vitorias <=50){
        return "Prata"
    }
    else if (vitorias > 50 &&  vitorias <=80){
        return "Ouro"
    }
    else if (vitorias > 80 &&  vitorias <=90){
        return "Diamante"
    }
    else if (vitorias > 90 &&  vitorias <=100){
        return "Lendário"
    }
        else if (vitorias > 100){
        return "Imortal"
    }

}

