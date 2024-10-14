function handleData(data) {
    var results = [];
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var item = data_1[_i];
        if (item.type === 'user') {
            results.push("Hello, my name is ".concat(item.name, " and I am ").concat(item.age, " years old."));
        }
        else if (item.type === 'product') {
            results.push("Product ID: ".concat(item.id, ", Price: $").concat(item.price.toFixed(2)));
        }
        else if (item.type === 'order') {
            results.push("Order ID: ".concat(item.orderId, ", Amount: $").concat(item.amount.toFixed(2)));
        }
        else {
            results.push('Unknown item type');
        }
    }
    return results;
}
var mixedData = [
    { type: 'user', name: 'Alice', age: 30 },
    { type: 'product', id: 101, price: 29.99 },
    { type: 'order', orderId: 'ORD123', amount: 100.50 },
    // { type: 'unexpected' }
];
var results = handleData(mixedData);
console.log(results);
