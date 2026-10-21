idade = int(input("Digite a sua idade: "))
valorIngresso = 0

if (idade < 12):
    valorIngresso = 15.00
    print("Sua idade é:", idade, "O valor do ingresso é:", "R$",valorIngresso)
    print("Você não pode entrar")

elif (idade >= 12 and idade <= 17):
    valorIngresso = 15.00
    print("Sua idade é:", idade, "O valor do ingresso é:", "R$",valorIngresso)
    print("Você pode entrar")

elif (idade >= 18 and idade <= 59):
    valorIngresso = 30.00
    print("Sua idade é:", idade, "O valor do ingresso é:", "R$",valorIngresso)
    print("Você pode entrar")

elif (idade >= 60):
    valorIngresso = 00.00
    print("Sua idade é:", idade, "O valor do ingresso é:", "R$",valorIngresso, "Não precisa pagar!")
    print("Você pode entrar")