class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone):
        print(f"{other_phone.phone_number} called to {self.phone_number}")
        dict_call = {"to":other_phone.phone_number, "from":self.phone_number}
        self.call_history.append(dict_call)
        other_phone.call_history.append(dict_call)
      
    def show_call_history(self):
        print(self.call_history)    

    def send_message(self, other_phone, text):
        str_message = (f"{other_phone.phone_number} text to {self.phone_number} : {text}")
        print(str_message)
        dict_message = {"to":other_phone.phone_number, "from":self.phone_number, "content": text }
        self.messages.append(dict_message)
        other_phone.messages.append(dict_message)

    def show_outgoing_messages(self):
        for i in self.messages:
            if i["from"] == self.phone_number:
               print(i) 

    def show_incoming_messages(self):
        for i in self.messages:
            if i["to"] == self.phone_number:
               print(i)

    def show_messages_from(self, other_phone):
        for i in self.messages:
           if i["from"] == other_phone.phone_number:
              print(i)

my_phone = Phone("+56789456")
dad_phone = Phone("+4534534534")

my_phone.call(dad_phone) 

my_phone.show_call_history()  
dad_phone.show_call_history()

my_phone.send_message(dad_phone, "hi")
my_phone.show_outgoing_messages()
my_phone.show_incoming_messages()
dad_phone.show_incoming_messages()
dad_phone.show_outgoing_messages()