let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    groceries['fruits'].forEach(element => {
        console.log(element)
    });
}
displayGroceries();


const cloneGroceries = () => {
    let user = client;
    client = 'Betty'; 
    // Will we also see this modification in the user variable ? Why ? 
    // No, because for rows the value is copied
    let shopping  = groceries;
    groceries['totalPrice'] = '35$'
    groceries.other.paid = false;
    // Will we also see this modification in the shopping object ? Why ?
    // Yes, since the link for the object is copied
}

cloneGroceries();