Nota1 = float(input("Insira sua nota: "))
Nota2 = float(input("Insira sua nota: "))
Nota3 = float(input("Insira sua nota: "))

Media = (Nota1 + Nota2 + Nota3) / 3

print("A sua média de notas é:",Media)

if Media <= 6 and Media >= 5:
    print("Sua média é:",Media, "Você está reprovado")

elif Media >= 7:
    print("Sua média é:",Media, "Você está aprovado")

elif Media < 4:
    print("Sua média é:",Media, "Você está reprovado")