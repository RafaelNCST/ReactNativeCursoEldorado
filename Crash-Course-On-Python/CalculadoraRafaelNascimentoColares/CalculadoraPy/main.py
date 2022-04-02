import math
import time

class Calculadora: #Classe Calculadora
    def __init__(self,numero1,numero2):
        self.numero1 = numero1
        self.numero2 = numero2

    def somar(self):
        return f"Soma: {self.numero1 + self.numero2}"
    
    def subtrair(self):
        return f"Subtração: {self.numero1 - self.numero2}"

    def divisao(self):
        return f"Divisão: {self.numero1//self.numero2}"

    def multiplicar(self):
        return f"Multiplicação: {self.numero1*self.numero2}"

    def Quadrado(self):
        return f"Raiz Quadrada de {self.numero1}: {math.sqrt(self.numero1)}"    

    def Potencia(self):
        return f"Potencia: {self.numero1**self.numero2}"

    def Resto(self):
        return f"Resto de divisão {self.numero1} e {self.numero2}: {self.numero1%self.numero2}"

    def Porcentagem(self):
        return f"{self.numero1}% de {self.numero2}: {(self.numero1*self.numero2)//100}"

class CalculadoraCientifica(Calculadora): #Fatorial, Logaritmo Natural
    def __init__(self, numero1, numero2):
        super().__init__(numero1, numero2)
    
    def Fatorial(self):
        resposta = 1
        for num in range(1,self.numero1+1):
            resposta *= num
        return f"Fatorial de {self.numero1}: {resposta}"

    def LogNatural(self):
        return f"Log de {self.numero1}: {math.log(self.numero1)}"


#Menu de controle (Opcional), Pode instanciar se quiser

controle = 1
while(controle != 0):   
    print("--------------------------------------------------------------")     
    print("1 - Somar")
    print("2 - Subtrair")
    print("3 - Dividir")
    print("4 - Multiplicar")
    print("5 - Raiz Quadrada")
    print("6 - Potencia")
    print("7 - Resto")
    print("8 - Porcentagem")
    print("Calculadora Cientifica: ")
    print("9 - Fatorial")
    print("10 - Logaritmo Natural")
    print("0 - Para Sair")
    print("--------------------------------------------------------------")    
    controle = int(input("Digite o numero correspondente para navegar: "))
    print("--------------------------------------------------------------")   

    if controle == 1:
        numero1 = int(input("Digite o primeiro número: "))
        numero2 = int(input("Digite o segundo número: "))
        print("----------------------------------------------------------")   
        print(Calculadora(numero1,numero2).somar())
        time.sleep(4)

    elif controle == 2:
        numero1 = int(input("Digite o primeiro número: "))
        numero2 = int(input("Digite o segundo número: "))
        print("----------------------------------------------------------") 
        print(Calculadora(numero1,numero2).subtrair())
        time.sleep(4)

    elif controle == 3:
        numero1 = int(input("Digite o primeiro número: "))
        numero2 = int(input("Digite o segundo número: "))
        print("----------------------------------------------------------") 
        print(Calculadora(numero1,numero2).divisao())
        time.sleep(4)

    elif controle == 4:
        numero1 = int(input("Digite o primeiro número: "))
        numero2 = int(input("Digite o segundo número: "))
        print("----------------------------------------------------------") 
        print(Calculadora(numero1,numero2).multiplicar())
        time.sleep(4)

    elif controle == 5:
        numero1 = int(input("Digite o número: "))
        print("----------------------------------------------------------") 
        print(Calculadora(numero1,0).Quadrado())
        time.sleep(4)

    elif controle == 6:
        numero1 = int(input("Digite a base: "))
        numero2 = int(input("Digite a potência: "))
        print("----------------------------------------------------------") 
        print(Calculadora(numero1,numero2).Potencia())
        time.sleep(4)

    elif controle == 7:
        numero1 = int(input("Digite o primeiro número: "))
        numero2 = int(input("Digite o segundo número: "))
        print("----------------------------------------------------------") 
        print(Calculadora(numero1,numero2).Resto())
        time.sleep(4)

    elif controle == 8:
        numero1 = int(input("Digite a porcentagem: "))
        numero2 = int(input("Digite o valor a ser visto a porcentagem: "))
        print("----------------------------------------------------------") 
        print(Calculadora(numero1,numero2).Porcentagem())
        time.sleep(4)

    elif controle == 9:
        numero1 = int(input("Digite o número: "))
        print("----------------------------------------------------------") 
        print(CalculadoraCientifica(numero1,0).Fatorial())
        time.sleep(4)

    elif controle == 10:
        numero1 = int(input("Digite o número: "))
        print("----------------------------------------------------------") 
        print(CalculadoraCientifica(numero1,0).LogNatural())
        time.sleep(4)
        
    elif controle == 0: 
        break
    
    
    
    
    
    
    
    

