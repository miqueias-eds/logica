const escrever = require("readline-sync")

var idade = parseInt(escrever.question("Qual é a sua idade: "))
var clasIndic = "16 anos"
var valorentrada = 0

if(idade <= 11){
    console.log("Classificaçao indicativa: 16 anos.")
    console.log("Valor da entrada: R$ 15,00")
    console.log("Acesso negado")
}

else if(idade >=12 && idade <=15) {
    console.log("Classificaçao indicativa: 16 anos.")
    console.log("Valor da entrada: R$ 30,00")
    console.log("Acesso negado")
}

else if(idade >= 16 && idade <= 59){
    console.log("Classificaçao indicativa: 16 anos.")
    console.log("Valor da entrada: R$ 30,00")
    console.log("Acesso permitido")
}

else if(idade >= 60){
    console.log("Classificaçao indicativa: 16 anos.")
    console.log("Valor da entrada: R$ 15,00")
    console.log("Acesso permitido")
}