const escrever = require("readline-sync")
let nome = escrever.question("Qual é o seu nome?")
var comidapreferida = escrever.question("Qual é sua comida preferida?")
var idade = parseInt(escrever.question("Qual é a sua idade?"))

if(idade >= 25) {
    console.log("Podem entrar na festa")
}

else{
    console.log("Não pode entrar")
}

if(idade >= 25 && comidapreferida == "pizza"){
    console.log("Pode entrar")
}
else if(idade >= 25 && comidapreferida == "lasanha"){
    console.log("Converse com a dona da festa")
}
else{
    console.log("Volte amanhã, porquê hoje é pizza")
}