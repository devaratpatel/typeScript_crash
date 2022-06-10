let id = 5;
id = 20;
let company = 'Traversy Media';
let isPublished = true;
let words = 'zebra';
let x = 'hello';
x = true;
let myArr = ['guess what'];
myArr.push('code');
myArr.push('helps');
let objectOne;
objectOne = {
    name: 'C#',
    fees: 7800,
};
const myFunc = (side) => {
    return side * side;
};
let notSure;
notSure = 'test';
notSure = false;
let mixed = [];
mixed.push(23);
mixed.push('basketball');
mixed.push(true);
const kgToLbs = (weight) => {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
};
const sum = (num1, num2) => {
    return num1 + num2;
};
function add(num1, num2) {
    return num1 + num2;
}
let myFunc2 = (multiType, person) => {
    console.log('Value of multiType is ', multiType);
    console.log(`First name of the person is", ${person.firstName}, and his sid is ${person.sid}`);
};
const randomArray = ['devarat', 24];
let mySize = 30;
const myObj = {
    id: 1,
    name: 'Mosh',
    retire(date) {
        console.log(date);
    },
    multiply(num3, num2) {
        return num3 * num2;
    },
};
myObj.name = 'Devarat';
console.log(myObj.multiply(2, 3));
let quanity = 100;
function greet(person) {
    return 'Hello ' + person.name;
}
let monkey = [
    { name: 'John Smith', age: 30, occupation: 'Software engineer' },
    { name: 'Kate Müller', age: 28 },
];
console.log(greet({ name: 'devarat', age: 20 }));
console.log('this is mySize: ', mySize);
console.log('this is my myArr', myArr);
console.log('notSure: ', notSure);
console.log('mixed', mixed);
console.log('ID:', id);
console.log('myFunc =', myFunc(100));
console.log('add Function', add('10', '20'));
console.log(myFunc2(21, { firstName: 'devarat', sid: false }));
console.log(myObj.retire(new Date(1997, 6, 26)));
console.log('this is my kg:', kgToLbs('10kg'));
export {};
//# sourceMappingURL=index.js.map