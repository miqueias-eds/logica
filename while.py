#While no python

#while condição:
    #bloco

#for "variável" in "sequência":
      #"bloco de código"

#Exemplo do "for":

#for i in rage(1,6):
      #print (f"numero: {i}")


qtd = 0
soma = 0
media = 0
valor = float(input("Digite um valor: "))

while(valor > 0.0):
    soma = soma + valor
    qtd = qtd + 1

    valor = float(input("Digite um valor: "))

media = media / qtd
print("\n total da soma: ", soma)
print("\n Quantidade de valores digitados: ", qtd)
print("\n Média de valores: ", media)