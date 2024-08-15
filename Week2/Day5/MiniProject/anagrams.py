from anagram_checker import AnagramChecker


def user_input():
    word = ""
    anagram_checker1 = AnagramChecker("Week2/Day5/MiniProject/sowpods.txt")
    while word =="":
        user_input = input("You need to enter a word or E (to exit the program): ").strip()
        validation_result = anagram_checker1.is_valid_word(user_input)
        if validation_result != True:
            return validation_result
        else: word = user_input
    words = anagram_checker1.get_anagrams(word)
    words.remove(word)
    print(f'''
              YOUR WORD : {word}
              this is a valid English word.
              Anagrams for your word: {words}.  
           ''')

         
user_input()
