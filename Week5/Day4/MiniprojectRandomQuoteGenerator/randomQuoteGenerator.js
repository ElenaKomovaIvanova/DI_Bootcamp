let quotes = [
    { id: 0, author: "George Carlin", quote: "The reason I talk to myself is because I’m the only one whose answers I accept." },
    { id: 1, author: "Dave Chappelle", quote: "The hardest thing to do is to be true to yourself, especially when everybody is watching." },
    { id: 2, author: "Chris Rock", quote: "You can only offend me if you mean something to me." },
    { id: 3, author: "Mitch Hedberg", quote: "I'm sick of following my dreams. I'm just going to ask them where they’re going and hook up with them later." },
    { id: 4, author: "Robin Williams", quote: "Comedy is acting out optimism." },
    { id: 5, author: "Richard Pryor", quote: "There’s a thin line between to laugh with and to laugh at." },
    { id: 6, author: "Ellen DeGeneres", quote: "My grandmother started walking five miles a day when she was sixty. She’s ninety-seven now, and we don’t know where the heck she is." },
    { id: 7, author: "Louis C.K.", quote: "The meal is not over when I'm full. The meal is over when I hate myself." },
    { id: 8, author: "Jerry Seinfeld", quote: "A bookstore is one of the only pieces of evidence we have that people are still thinking." },
    { id: 9, author: "Tina Fey", quote: "If you retain nothing else, always remember the most important rule of beauty, which is: who cares?" },
    { id: 10, author: "Amy Schumer", quote: "Nothing works unless you do." },
    { id: 11, author: "Rodney Dangerfield", quote: "I told my psychiatrist that everyone hates me. He said I was being ridiculous – everyone hasn’t met me yet." },
    { id: 12, author: "Steve Martin", quote: "A day without sunshine is like, you know, night." },
    { id: 13, author: "Kevin Hart", quote: "Everybody wants to be famous, but nobody wants to do the work." },
    { id: 14, author: "Bill Burr", quote: "If you do everything they tell you, you’ll have nothing to talk about in the locker room." },
    { id: 15, author: "Sarah Silverman", quote: "I don't care if you think I'm racist. I just want you to think I'm thin." },
    { id: 16, author: "Joan Rivers", quote: "I succeeded by saying what everyone else is thinking." },
    { id: 17, author: "Aziz Ansari", quote: "I’m an optimist, but an optimist who carries a raincoat." },
    { id: 18, author: "Jim Gaffigan", quote: "I have more stories to tell than anyone in the world." },
    { id: 19, author: "Eddie Murphy", quote: "I’m an icon. A lot of people look up to me, and a lot of people imitate my style." },
    { id: 20, author: "Groucho Marx", quote: "I refuse to join any club that would have me as a member." },
    { id: 21, author: "Wanda Sykes", quote: "I'm here today because I'm black." },
    { id: 22, author: "Bill Cosby", quote: "I don’t know the key to success, but the key to failure is trying to please everybody." },
    { id: 23, author: "Bob Newhart", quote: "All I can say about life is, ‘Oh God, enjoy it.’" },
    { id: 24, author: "Stephen Colbert", quote: "You can’t laugh and be afraid at the same time—of anything." },
    { id: 25, author: "Chelsea Handler", quote: "You can’t blame anyone else, no one else can make you feel better, or worse, no one is really to blame." },
    { id: 26, author: "Will Ferrell", quote: "Before you marry a person, you should first make them use a computer with slow internet to see who they really are." },
    { id: 27, author: "Louis C.K.", quote: "Everything's amazing right now, and nobody's happy." },
    { id: 28, author: "Kathleen Madigan", quote: "I just didn’t want to take my face away from the heat of a thousand lights." },
    { id: 29, author: "Norm Macdonald", quote: "I'm pretty sure there's a lot more to life than being really, really, ridiculously good-looking. And I plan on finding out what that is." }
];

let lastChose;

const buttunGen = document.getElementById("button");
buttunGen.addEventListener("click", function () {
    const randomNum = Math.floor(Math.random() * quotes.length);
    while (lastChose === randomNum) {
        randomNum = Math.floor(Math.random() * quotes.length);
    }
    lastChose = randomNum;
    document.getElementById("quote").innerHTML = quotes[randomNum].quote;
    document.getElementById("author").innerHTML = quotes[randomNum].author;
});

// Part 2 : Add buttons
// In the HTML file, create a form with the inputs “Quote” and “Author” and a button. So when you click on the button, you can add a new quote to the array of object.
// Important: Don’t forget to set the id of the new quotes

// In the HTML file, under the displayed quote, create a few more buttons:
// A button that gives the number of character inside each quote (space included)
// A button that gives the number of character inside each quote (space NOT included)
// A button that gives the number of words in each quote
// A button “Like” for the user to like a quote. Hint : add a new key to each object that will represent the number of “likes”.

let quote = document.getElementById("quoteText");
let author = document.getElementById("authorText");

let buttonSubmit = document.getElementById("buttonInput");

buttonSubmit.addEventListener('click', function (event) {
    event.preventDefault(); 
    const quoteText = quote.value;
    const authorText = author.value;
    const newQuote = {
        id: quotes.length,
        quote: quoteText,
        author: authorText,
    };
    console.log(newQuote);
    quotes.push(newQuote);
    console.log(quotes.length);
});