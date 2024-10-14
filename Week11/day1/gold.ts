interface User {
    name: string;
    email: string;
}

interface Admin {
    name: string;
    email: string;
    adminLevel: string;
}

type AdminUser = User & Admin;

function getProperty(obj: AdminUser, propertyName: string): any | undefined {
    if (propertyName in obj) {
        return obj[propertyName];
    }
    return undefined;
}


const adminUser: AdminUser = {
    name: 'Alice',
    email: 'alice@example.com',
    adminLevel: 1,
};

console.log(getProperty(adminUser, 'name'));
console.log(getProperty(adminUser, 'adminLevel'));
console.log(getProperty(adminUser, 'email'));
console.log(getProperty(adminUser, 'nonExistentProperty'));


function castToType<T>(value: string, type: { new(value: string): T }): T {
    return new type(value);
}

const strNumber: string = "42";
const strBoolean: string = "true";


const numberValue: number = castToType<number>(strNumber, Number);
console.log(numberValue); // 42
console.log(typeof numberValue); // "number"


const booleanValue: boolean = castToType<boolean>(strBoolean, Boolean);
console.log(booleanValue); // true
console.log(typeof booleanValue); // "boolean"


function getArrayLength<T extends number | string>(items: T[]): number {
    return items.length;
}


const numberArray: number[] = [1, 2, 3, 4, 5];
const numberLength = getArrayLength(numberArray);
console.log(`Length: ${numberLength}`);


const stringArray: string[] = ["apple", "banana", "cherry"];
const stringLength = getArrayLength(stringArray);
console.log(`Length: ${stringLength}`);


interface Storage<T> {
    add(item: T): void;

    get(index: number): T | undefined;
}

class Box<T> implements Storage<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }


    get(index: number): T | undefined {
        return this.items[index];
    }
}


const stringBox = new Box<string>();
stringBox.add("apple");
stringBox.add("banana");
console.log(stringBox.get(0)); // apple
console.log(stringBox.get(1)); // banana


const numberBox = new Box<number>();
numberBox.add(1);
numberBox.add(2);
console.log(numberBox.get(0)); // 1

const objectBox = new Box<{ name: string }>();
objectBox.add({name: "Alice"});
objectBox.add({name: "Bob"});
console.log(objectBox.get(0)); // { name: "Alice" }
console.log(objectBox.get(1)); // { name: "Bob" }


interface Item<T> {
    value: T;
}

class Queue<T extends Item<any>> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    remove(): T | undefined {
        return this.items.shift();
    }


    size(): number {
        return this.items.length;
    }
}



const stringQueue = new Queue<Item<string>>();
stringQueue.add({ value: "Hello" });
stringQueue.add({ value: "World" });

console.log(stringQueue.size()); // 2
console.log(stringQueue.remove()); // { value: "Hello" }
console.log(stringQueue.size()); // 1

// Очередь для чисел
const numberQueue = new Queue<Item<number>>();
numberQueue.add({ value: 42 });
numberQueue.add({ value: 100 });

console.log(numberQueue.size()); // 2
console.log(numberQueue.remove()); // { value: 42 }
console.log(numberQueue.size()); // 1

