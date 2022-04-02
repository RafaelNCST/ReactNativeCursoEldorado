import re
userName = input("Digite um username: ")

#Não permitir caracteres especiais(Com exceção do underline __,_)
#Não permitir espaços
#Diferenciar Maiusculas de Minusculas
#Não deve haver repetidos
#Guardar em um Arquivo text

def RegrasParaCriarUserName():
    regex = r"\W\s"
    result = re.search(regex, userName)
    if result == None:
        return VerificarSeNomeJaExisti()
    elif result != None:
        print("Caracteres não permitidos")

def VerificarSeNomeJaExisti():
    with open("text.txt", "r") as file:
        if userName in file:
            print("Nome já existe")
        elif userName not in file:
            return SalvarUserName()

def SalvarUserName():
    with open("text.txt", "a+") as file:    
        file.write(userName + "\n")

RegrasParaCriarUserName()