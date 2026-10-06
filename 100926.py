idade = int(input("Qual é a sua idade? "))
valor_ingresso = 0
pode_entrar = False


if (idade < 12):
    valor_ingresso = 15.00
    pode_entrar = False
    print("Acesso negado")
    print("Valor total do ingresso: R$ 15,00")

elif (idade >= 12 and idade) < 16:
    valor_ingresso = 30.00
    pode_entrar = False
    print("Acesso negado")
    print("Valor total do ingresso: R$ 30,00")

elif (idade >= 16 and idade) < 60:
    valor_ingresso = 30.00
    pode_entrar = True
    print("Acesso permitido")
    print("Valor total do ingresso: R$ 30,00")

elif (idade >= 60):
    valor_ingresso = 15.00
    pode_entrar = True
    print("Acesso permitido!")
    print("Valor total do ingresso: R$ 15,00")