import "./styles.css";
console.clear();

/**
 2. Find all repeated numbers from an array
Input: [1,2,4,5,6,1,3,7,9,10]

Output: [1, 2, 4, 5, 6, 3, 7, 9, 10]
*/

// option - 1
const hasUnique = (arr) => {
  return [...new Set(arr)];
};

// console.log(hasUnique(arr))

const hasUnique2 = (arr) => {
  const obj = {};
  for (let val of arr) {
    obj[val] = undefined;
  }
  return Object.keys(obj).map((each) => Number(each));
};

// console.log(hasUnique2(arr))

const arr = [1, 2, 4, 5, 5, 5, 5, 6, 1, 3, 7, 9, 10];
const countDuplicate = (arr) => {
  const obj = {};
  let count = 1;
  for (let val of arr) {
    if (obj[val] !== undefined) {
      obj[val] += count;
    } else {
      obj[val] = count;
    }
  }
  console.log(obj);
  return obj;
};

// countDuplicate(arr);

function countDuplicate1(arr) {
  const sortedArray = arr.slice().sort();
  console.log("sorted Array- ", sortedArray);
  const result = [];
  for (let i = 0, l = sortedArray.length - 1; i < l; i++) {
    console.log(sortedArray[i]);
    if (sortedArray[i + 1] === sortedArray[i]) {
      result.push(sortedArray[i]);
    }
  }
  console.log(result);
  return result;
}

// countDuplicate1(arr)

function countDuplicate2(arr) {
  const sortedArray = arr.slice().sort();
  // console.log("sorted Array- ", sortedArray)
  const result = arr.filter((each, idx) => {
    return arr.indexOf(each) === idx;
  });

  console.log(result);
  return result;
}

countDuplicate2(arr);

const findUniqueNos = (inputData) => {
  let uniqueNumbers = [];
  inputData.map((number) => {
    let counts = uniqueNumbers.filter((uniqueNo) => uniqueNo === number);
    console.log(counts);
    // console.log(counts.length !== 1);
    // console.log(counts.length);
    uniqueNumbers.push(number);
  });
  return uniqueNumbers;
};
// console.log(findUniqueNos(arr));

// others linkin questions

class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: "some" }, "hee");
// console.log(freddie.colorChange('orange'));

function bark() {
  console.log("Woof!");
}

let arr2 = [];
arr2.arr = "helo";

bark.animal = "dog";
/*
function Person(fName, lName){
this.fName = fName;
this.lName = lName;
}
let fName = "hello";
let lName = "world";

Person.prototype.fullName = function(){
  return `${this.fName} ${this.lName}`
}
// Person.fullName = function(){
//   return `${this.fName} ${this.lName}`
// }
function fullName2(){
  return `${this.fName} ${this.lName}`
}
const ali = new Person("ali", "raza")
// const fullName = Person.fullName.bind(ali)
// console.log(ali.fullName())

const fullName2instance = fullName2.bind(ali)
// console.log(fullName())
// console.log(fullName2instance())
// console.log(fullName2.call(new Person("hello", "world")))

*/

/*
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('Sarah', 'Smith');

console.log(lydia);
console.log(sarah);

*/

/*

function sum(a, b) {
  return a + b;
}

console.log(sum(1, '2'))
*/

/*
let number = 0;
// let num2 = ++number
// console.log(number++);
console.log(number);
console.log(++number);
console.log(number);

// console.log(num2);
*/

/*

function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = "Lydia";
const age = 21;

getPersonInfo`${person} is ${age} years old`;
*/

// console.log({age:18}==={age:17})

/*
function getAge(...args) {
  console.log(typeof args);
}

getAge(21,21);

*/

/*
const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5, '1']);
console.log(
obj.hasOwnProperty('1'),
obj.hasOwnProperty(1),
set.has('1'),
set.has(1)
);
*/

/*

String.prototype.giveLydiaPizza = () => {
  return `Just give ${this} pizza already!`;
};

const name = 'Lydia';

console.log(name.giveLydiaPizza())
*/

// console.log(new Date().valueOf())
// console.log(new Date().getTime())
