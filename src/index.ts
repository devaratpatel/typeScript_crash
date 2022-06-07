// TypeScript Primitive Types

let id: number = 5;
//my comments here
id = 20;
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let words: string = 'zebra';
let x: any = 'hello';
x = true;
let myArr: string[] = [];
myArr.push('code');
myArr.push('helps');

let objectOne: object;

objectOne = {
  name: 'C#',
  fees: 7800,
};
// Variable Typing as an argument

const myFunc = (side: number) => {
  return side * side;
};
//  Union Types
let notSure: string | boolean;
notSure = 'test';
notSure = false;

//Union Types in Array

let mixed: (string | boolean | number)[] = [];
mixed.push(23);
mixed.push('basketball');
mixed.push(true);

//Function Types
const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};

function add(num1: string, num2: string): string {
  return num1 + num2;
}
//Custom Types
type boolOrNum = boolean | number;
type personDetails = { firstName: string; sid: boolOrNum };
/* let myFunc2 = (multiType: boolean | number, person: { firstName: string; sid: boolean | number }) => {};
instead of using so many unions types, you can declare your own custom types and then replace them in your argument
*/

let myFunc2 = (multiType: boolOrNum, person: personDetails) => {
  console.log('Value of multiType is ', multiType);
  console.log(`First name of the person is", ${person.firstName}, and his sid is ${person.sid}`);
};

console.log('this is my myArr', myArr);
console.log('notSure: ', notSure);
console.log('mixed', mixed);
console.log('ID:', id);
console.log('myFunc =', myFunc(100));
console.log(myFunc2(21, { firstName: 'devarat', sid: false }));

export {};
