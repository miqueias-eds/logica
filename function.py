def mensagem1():
    print("Hello World")


def mensagem2():
    return "Hello World"

mensagem1()

texto = mensagem2()
print(texto)

###############################

def lernotas():
    n=float(input("Digite a nota do aluno: "))
    return n

################################################

def resultado(n1, n2):
    media=(n1,n2)/2
    print("Primeira nota: ",n1)
    print("Segunda nota: ",n2)
    print("A média é: ",media, "Resultado: ", end="")
    if media >= 7:
        print("Aprovado")