type User = {
    type: 'user';
    name: string;
    age: number;
};

type Product = {
    type: 'product';
    id: number;
    price: number;
};

type Order = {
    type: 'order';
    orderId: string;
    amount: number;
};


function handleData(data: (User | Product | Order)[]): string[] {
    const results: string[] = [];

    for (const item of data) {
        if (item.type === 'user') {
            results.push(`Hello, my name is ${item.name} and I am ${item.age} years old.`);
        } else if (item.type === 'product') {
            results.push(`Product ID: ${item.id}, Price: $${item.price.toFixed(2)}`);
        } else if (item.type === 'order') {
            results.push(`Order ID: ${item.orderId}, Amount: $${item.amount.toFixed(2)}`);
        } else {
            results.push('Unknown item type');
        }
    }

    return results;
}


const data: (User | Product | Order)[] = [
    { type: 'user', name: 'Alice', age: 30 },
    { type: 'product', id: 101, price: 29.99 },
    { type: 'order', orderId: 'ORD123', amount: 100.50 },
    // { type: 'unexpected' }
];

const results = handleData(data);
console.log(results);
