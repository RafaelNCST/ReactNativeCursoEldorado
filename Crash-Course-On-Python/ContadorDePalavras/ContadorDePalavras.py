from collections import Counter

def testando(file_contents):

    with open(file_contents, "r") as file:

        strVoid = ""
        for line in file:
            strVoid += line 

        punctuations = '''!()-[]{};:"\,<>./?@#$%^&*_~´'''
        uninteresting_words = ["the", "a", "to", "if", "is", "it", "of", "and", "or", "an", "as", "i", "me", "my", \
        "we", "our", "ours", "you", "your", "yours", "he", "she", "him", "his", "her", "hers", "its", "they", "them", \
        "their", "what", "which", "who", "whom", "this", "that", "am", "are", "was", "were", "be", "been", "being", \
        "have", "has", "had", "do", "does", "did", "but", "at", "by", "with", "from", "here", "when", "where", "how", \
        "all", "any", "both", "each", "few", "more", "some", "such", "no", "nor", "too", "very", "can", "will", "just"]
        for pontoWord in strVoid:
            if pontoWord in punctuations:
                strVoid = strVoid.replace(pontoWord, "")
        for word in strVoid.split():
            if word in uninteresting_words:
                strVoid = strVoid.replace(word, "")

        dictVoid = Counter(strVoid.lower().split())
    return dictVoid

print(testando("Livro.txt"))