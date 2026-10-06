for (var i = 0; i < 9; i++) {
    console.log(i)
}

var alunos=["Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernando", "Gabriel", "Helena", "Igor", "Julia"]

for (var i=0; i < alunos.length; i = i++) {
    console.log("O índice é " + i + ":" + alunos[i])
    break
}

var convidados = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernando", "Gabriel", "Helena", "Igor", "Julia"]

var pessoaBuscar = "Carlos";

for (var i = 0; i < convidados.length; i = i++) {
    if (convidados[i] === pessoaBuscar) {
        console.log ("Encontrei o" + pessoaBuscar + "Ele está na lista de convidado")
        encontrado = true
}

}