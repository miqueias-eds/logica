var temperatura = [28, 31, 35, 40, 32, 29]
var graus = 30

for(var i = 0; i < temperatura.length; i = i+1) {
    if (graus == 28) {
        console.log("São 7:00h e a temperatura é de " + graus + " graus")
    }
    else if (graus == 29) {
        console.log("São 7:42h e a temperatura é de " + graus + " graus")
    }
    else if (graus == 31) {
        console.log("Alerta: Temperatura alta de " + graus + " registrada!")
    }
    else if (graus == 32) {
        console.log("Alerta: Temperatura alta de " + graus + " registrada!")
    }
    else if (graus == 35) {
        console.log("Alerta: Temperatura alta de " + graus + " registrada!")
    }
    else if (graus == 40) {
        console.log("Alerta: Temperatura alta de " + graus + " registrada!")
    }
}