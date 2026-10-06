var notasAlunos = [5.5, 8.0, 4.0, 9.5, 6.0, 7.5]
var NotasAlunosAprovados = 0

for(var i = 0; i < notasAlunos.length; i = i+1) {
    if (notasAlunos[i] >= 7.0) {
        NotasAlunosAprovados = notasAlunos[i]
        console.log("As notas dos alunos aprovados foram: " + NotasAlunosAprovados)
    }
}