#!/usr/bin/env python3

import csv
import re 
import operator

def ContarTiposDeErros():
    dictErrorsCount = {}
    with open("syslog.log", "r") as file:
        regex = r"ERROR\s(\w.+)\s\("
        for line in file:
            result = re.search(regex, line)
            if result != None:
                if result.group(1) in dictErrorsCount:
                    dictErrorsCount[result.group(1)] += 1
                elif result.group(1) not in dictErrorsCount:
                    dictErrorsCount[result.group(1)] = 1
    return dictErrorsCount


def ContarErrosPorUsuario():
    dictErrorPerUser = {}
    with open("syslog.log", "r") as file:
        regex = r"\:\s(\w+)\s.+\s\((.+)\)"
        for line in file:
            result = re.search(regex, line)
            if result != None:
                if result.group(1) == "ERROR":
                    if result.group(2) not in dictErrorPerUser:
                        dictErrorPerUser[result.group(2)] = 1
                    else:
                        dictErrorPerUser[result.group(2)] += 1
    return dictErrorPerUser
    
def ContarInfosPorUsuario():
    dictInfoPerUser = {}
    with open("syslog.log", "r") as file:
        regex = r"\:\s(\w+)\s.+\s\((.+)\)"
        for line in file:
            result = re.search(regex, line)
            if result != None:        
                if result.group(1) == "INFO":      
                    if result.group(2) not in dictInfoPerUser:
                        dictInfoPerUser[result.group(2)] = 1
                    else:
                        dictInfoPerUser[result.group(2)] += 1
    return dictInfoPerUser

def ArrumarRelatorios(control, list):
    if control == 1:
        ordenado = sorted(list.items(), key=operator.itemgetter(1), reverse=True)
    elif control == 0:
        ordenado = sorted(list.items(), key=operator.itemgetter(0))
    return ordenado
    
def GerarRelatorioTipoDeErros():
    with open("error_message.csv","w") as filerelat:
        fieldnames = ["Error","Count"]
        writer = csv.DictWriter(filerelat, fieldnames=fieldnames)
        writer.writeheader()
        for key,value in CountTipoErros:
            writer.writerow({'Error':key,'Count':value})

def pegarErroInfo(keyError):
    for keyInfo, valueInfo in CountInfosPerUser:
        if keyInfo == keyError:
            return valueInfo
    return 0
        
def GerarRelatorioInfosErrosPerUser():
    with open("user_statistics.csv", "w") as filerelat:
        fieldnames = ["Username", "INFO", "ERROR"]
        write = csv.DictWriter(filerelat, fieldnames=fieldnames)
        write.writeheader()
        for keyError, valueError in CountErrorPerUser:
            InfoValor = pegarErroInfo(keyError)
            write.writerow({"Username": keyError,"INFO": InfoValor,"ERROR": valueError})
                    

dictContarTiposDeErros = ContarTiposDeErros()  
CountTipoErros = ArrumarRelatorios(1, dictContarTiposDeErros)
GerarRelatorioTipoDeErros()

dictContarErrosPerUser = ContarErrosPorUsuario() 
dictContarInfosPerUser = ContarInfosPorUsuario()
CountErrorPerUser = ArrumarRelatorios(0, dictContarErrosPerUser)
CountInfosPerUser = ArrumarRelatorios(0, dictContarInfosPerUser)
GerarRelatorioInfosErrosPerUser()




