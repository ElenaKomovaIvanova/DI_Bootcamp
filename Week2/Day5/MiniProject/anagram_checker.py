import re
import string
from typing import Counter


class AnagramChecker:
    def __init__(self, valid_words):
        with open(valid_words, 'r') as f:
           valid_words = f.read()  
           clean_text = re.sub(r'[^\w\s]', '', valid_words).lower()
        self.__valid_wordsvalid_words = clean_text.split()

    @property
    def valid_words(self):
        return self.__valid_wordsvalid_words


    def is_valid_word(self, word):
        try:
            if " " in word:
                 return "Only a single word is allowed!"
            elif word.isalpha():
                if word in self.valid_words:
                   return True
                else: return f"The {word} doesn't exist"
            else: return "Only alphabetic characters are allowed!"       
        except ValueError as e:
                return str(e)

        
    def get_anagrams(self, word):
        results = []
        word_counter = Counter(word) 
        for i in range(0,len(self.valid_words)):
            if len(self.valid_words[i]) == len(word) and all(letter in self.valid_words[i] for letter in word) and Counter(self.valid_words[i]) == word_counter:
                results.append(self.valid_words[i])
                i +=1
        return results
      




