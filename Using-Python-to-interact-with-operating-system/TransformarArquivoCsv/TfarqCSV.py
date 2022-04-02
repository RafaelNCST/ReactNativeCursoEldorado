import os
import csv
from collections import Counter

def countar_pessoas(filename1,filename2):
    dictVoid = {}
    with open(filename1) as file:
        reader = csv.DictReader(file)
        for row in reader:
            print("{}: {}".format(row["name"], row["departamento"]))
            if row["departamento"] in dictVoid: 
                dictVoid[row["departamento"]] = dictVoid[row["departamento"]] +1
            else:
                dictVoid[row["departamento"]] = 1
    with open(filename2, "w") as file2:
        for chave in dictVoid.keys():
            file2.write("Ha {} pessoas no departamento de {}\n".format(dictVoid[chave], chave))

countar_pessoas("csv_text.csv","text.txt")