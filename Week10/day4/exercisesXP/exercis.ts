class Employee {
    private name: string;
    private salary: number;
    public position: string;
    protected department: string;

    constructor(name: string, salary: number, position: string, department: string) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

    getEmployeeInfo(): string {
        return `Name: ${this.name}, position: ${this.position}`;
    }
}

const  employees = new Employee('jon', 50, 'boss','sales');
console.log(employees.getEmployeeInfo());

class Product {
    readonly id: number;
    public name: string;
    public price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getProductInfo(): string {
        return `Product: ${this.name}, Price: $${this.price}`;
    }
}

const product = new Product(1, "Laptop", 999);

console.log(product.getProductInfo());

product.name = "Gaming Laptop";
product.price = 1299;

// product.id = 2;


class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): string {
        return "Some sound";
    }
}

class Dog extends Animal {
    makeSound(): string {
        return "bark";
    }
}

const myDog = new Dog("Buddy");

console.log(myDog.makeSound());

console.log(myDog.name);

class Calculator {
    static add(a: number, b: number): number {
        return a + b;
    };

    static subtract(a: number, b: number): number {
        return a - b;
    };
}


console.log(Calculator.add(5,7));

console.log(Calculator.subtract(5,7));

interface User {
    readonly id: number;
    name: string;
    email: string;
}

interface PremiumUser extends User {
    membershipLevel?: string;
}

function printUserDetails(user: PremiumUser): void {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);

    if (user.membershipLevel) {
        console.log(`Membership Level: ${user.membershipLevel}`);
    } else {
        console.log('Membership Level: Not provided');
    }
}

const regularUser: PremiumUser = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
};

const premiumUser: PremiumUser = {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    membershipLevel: "Gold",
};

printUserDetails(regularUser);
printUserDetails(premiumUser);

