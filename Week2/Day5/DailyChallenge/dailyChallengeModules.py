# Instructions :
# Using the requests and time modules, 
# create a function which returns the amount of time it takes a webpage to load 
# (how long it takes for a complete response to a request).
# Test your code with multiple sites such as google, ynet, imdb, etc.


import time
import requests

url = "https://www.google.com/"

def time_response(url):
    start = time.time()
    response = requests.get(url)
    finish = time.time()
    result = finish - start
    print(result)
    
time_response(url)
