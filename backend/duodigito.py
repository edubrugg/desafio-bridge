from timeit import default_timer as timer

def duodigito():
    num = int(input("Digite um numero maior que 100: "))

    if num > 100:
        busca = True
        aux = 1
        inicio = timer()
        while busca:
            conjunto = set()
            resposta = num * aux
            aux += 1
            resposta_str = str(resposta)
            for i in range(len(resposta_str)):
                conjunto.add(resposta_str[i])
            if len(conjunto) == 2:
                busca = False
        fim = timer()
    else:
        print("Você precisa digitar um valor valido")
        duodigito()
    tempo = round((fim - inicio), 5)
    print("Resposta", resposta)
    print("Tempo", tempo)

duodigito()