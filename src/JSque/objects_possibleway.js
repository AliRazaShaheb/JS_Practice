// Q. possible way to create an object

// const myobj = {};
// const myobj = new Object();

function MyObj(name) {
  this.name = name;
}

const myobj = new MyObj("Hi");

class myobjclass {
  constructor(name) {
    this.name = name;
  }
}

const myobj1 = new myobjclass("hi class");

console.log(myobj1);
console.log(myobj);
