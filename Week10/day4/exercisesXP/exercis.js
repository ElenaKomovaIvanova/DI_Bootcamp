var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    Employee.prototype.getEmployeeInfo = function () {
        return "Name: ".concat(this.name, ", position: ").concat(this.position);
    };
    return Employee;
}());
var employees = new Employee('jon', 50, 'boss', 'sales');
console.log(employees.getEmployeeInfo());
var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    Product.prototype.getProductInfo = function () {
        return "Product: ".concat(this.name, ", Price: $").concat(this.price);
    };
    return Product;
}());
var product = new Product(1, "Laptop", 999);
console.log(product.getProductInfo());
product.name = "Gaming Laptop";
product.price = 1299;
// product.id = 2;
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        return "Some sound";
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        return "bark";
    };
    return Dog;
}(Animal));
var myDog = new Dog("Buddy");
console.log(myDog.makeSound());
console.log(myDog.name);
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.add = function (a, b) {
        return a + b;
    };
    ;
    Calculator.subtract = function (a, b) {
        return a - b;
    };
    ;
    return Calculator;
}());
console.log(Calculator.add(5, 7));
console.log(Calculator.subtract(5, 7));
function printUserDetails(user) {
    console.log("ID: ".concat(user.id));
    console.log("Name: ".concat(user.name));
    console.log("Email: ".concat(user.email));
    if (user.membershipLevel) {
        console.log("Membership Level: ".concat(user.membershipLevel));
    }
    else {
        console.log('Membership Level: Not provided');
    }
}
var regularUser = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
};
var premiumUser = {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    membershipLevel: "Gold",
};
printUserDetails(regularUser);
printUserDetails(premiumUser);
