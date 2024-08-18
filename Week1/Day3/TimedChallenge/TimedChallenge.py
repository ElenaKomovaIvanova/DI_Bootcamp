# sentence = input("input ").split()
# sentence_wordwise = " ".join(sentence[::-1])
# print(sentence_wordwise)

# en

def caesar_cipher(text, shift, mode):
    result = ""

    # Adjust the shift for decryption
    if mode == 'decrypt':
        shift = -shift

    # Traverse the text
    for letter in text:
        if letter.isalpha():  # Check if the character is a letter
            ascii_offset = 65 if letter.isupper() else 97
            shifted_index = (ord(letter) - ascii_offset + shift) % 26
            result += chr(shifted_index + ascii_offset)
        else:
            result += letter  # Non-alphabet characters are added unchanged

    return result

# User interaction
while True:
    mode = input("Do you want to encrypt or decrypt? (Type 'encrypt' or 'decrypt', or 'exit' to quit): ").lower()
    if mode == 'exit':
        break
    if mode not in ['encrypt', 'decrypt']:
        print("Invalid option. Please choose 'encrypt' or 'decrypt'.")
        continue
    
    text = input("Enter your message: ")
    shift = int(input("Enter the shift value (e.g., 3): "))

    # Call the caesar_cipher function
    result = caesar_cipher(text, shift, mode)
    print(f"The result is: {result}\n")
