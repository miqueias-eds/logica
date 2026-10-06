var compras = ["Feijão", "Arroz", "Tomate", "Batata", "Alho"]
var buscarCompra = "Batata"

for (var i = 0; i < compras.length; i = i+1) {
    if(compras[i] === buscarCompra) {
        console.log("A " + buscarCompra + " está no carrinho")
    }

}