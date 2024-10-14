function getProperty(obj, propertyName) {
    if (propertyName in obj) {
        return obj[propertyName];
    }
    return undefined;
}
var adminUser = {
    name: 'Alice',
    email: 'alice@example.com',
    adminLevel: 1,
};
console.log(getProperty(adminUser, 'name'));
console.log(getProperty(adminUser, 'adminLevel'));
console.log(getProperty(adminUser, 'email'));
console.log(getProperty(adminUser, 'nonExistentProperty'));
function castToType(value, type) {
    return new type(value); // Создаем новый экземпляр типа
}
var strNumber = "42";
var strBoolean = "true";
var numberValue = castToType(strNumber, Number);
console.log(numberValue); // 42
console.log(typeof numberValue); // "number"
var booleanValue = castToType(strBoolean, Boolean);
console.log(booleanValue); // true
console.log(typeof booleanValue); // "boolean"
