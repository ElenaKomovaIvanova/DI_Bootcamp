import re
from typing import Counter
import numpy as np


class Text:
    def __init__(self, text) -> None:
        self.text = text
        self.clean_text = re.sub(r'[^\w\s]', '', self.text).lower()
        self.words = self.clean_text.split()

    @classmethod
    def from_fail(cls, fail):
        with open(fail, 'r') as f:
           text = f.read()  
        return cls(text)    

    def frequency(self, word):
        if word not in self.words:
            return None
        else:
            return self.words.count(word)
        
    def most_common(self):
        words_counter = Counter(self.words)
        return words_counter.most_common(1)
    
    
    def uniq(self):
        list_uniq = []
        words_counter = Counter(self.words)
        for key, value in words_counter.items():
            if value == 1:
                list_uniq.append(key)
        return list_uniq
    

            


text1 = Text("A good book would sometimes cost as much as a good house.")
print(text1.words)
print(text1.frequency("good"))
print(text1.most_common())
print(text1.uniq())

text2 = Text.from_fail("Week2/Day4/DailyChallenge/the_stranger.txt")
print(text2.frequency("telling"))
print(text2.most_common())
# print(text2.uniq())