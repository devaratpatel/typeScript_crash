let id = 5;
id = 20;
let company = 'Traversy Media';
let isPublished = true;
let words = 'zebra';
let x = 'hello';
x = true;
let myArr = [];
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
};
myObj.name = 'Devarat';
console.log(myObj.retire(new Date(1997, 6, 26)));
console.log('this is mySize: ', mySize);
console.log('this is my myArr', myArr);
console.log('notSure: ', notSure);
console.log('mixed', mixed);
console.log('ID:', id);
console.log('myFunc =', myFunc(100));
console.log(myFunc2(21, { firstName: 'devarat', sid: false }));
export {};
//# sourceMappingURL=index.js.map