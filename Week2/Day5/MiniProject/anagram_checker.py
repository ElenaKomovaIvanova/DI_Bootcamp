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
        sorted_word = sorted(word)
        for valid_word in self.valid_words:
                if sorted_word == sorted(valid_word):
                   results.append(valid_word)
        return results
      




