from anagram_checker import AnagramChecker


def user_input():
    word = ""
    anagram_checker1 = AnagramChecker("Week2/Day5/MiniProject/sowpods.txt")
    while word =="":
        user_input = input("You need to enter a word or E (to exit the program): ").strip().lower()
        validation_result = anagram_checker1.is_valid_word(user_input)
        if validation_result != True:
            return validation_result
        else: word = user_input
    words = anagram_checker1.get_anagrams(word)
    words.remove(word)
    # print(len(word))
    if len(words) != 0: print(f'''
              YOUR WORD : {word}
              this is a valid English word.
              Anagrams for your word: {words}.  
           ''')
    else:  print (f'''YOUR WORD : {word}
              this is a valid English word.
              There are no anagrams.  
           ''')

user_input()
