const products = require("./products");

function isInProducts (name) {
    const product = products.find(p => p.name === name);
    return product ? product : `Product with name "${name}" not found.`;
}

const testProductNames = [
    'Laptop',
    'Coffee Maker',
    'Wireless Mouse',
    'none'
  ];
  
  testProductNames.forEach(name => {
    console.log(isInProducts(name));
  });