/*What will the code below output? Explain your answer.

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
*/
/** ANSWER
 *
 */
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

/*
var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log(this);
    console.log("outer func:  this.foo = " + this.foo);
    console.log("outer func:  self.foo = " + self.foo);
    (function () {
      console.log("inner func:  this.foo = " + this.foo);
      console.log("inner func:  self.foo = " + self.foo);
    })();
  }
};
// myObject.func();

function Hello() {
  let greet = "hello";
  console.log(this, greet);
}
Hello();
*/
/** ANSWER
 * this reference to parent object
 * this result is depend on where this in get called.
 * if get called in a object -> method -> this === object || undefined (because of 'strict mode')
 * if you want to access object property from deep nested function
 * assisgn this in a valiable i.e. 'var self' in our case
 * variable can be access from any deep nested function because of closure.
 * so, answer is
 * 1) bar
 * 2) bar
 * 3) undefined
 * 4) bar
 */

/**
 * What will the code below output to the console and why?

(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

=====ANSWER =========
without strict mode, old way this is default behavrious of JS
var a=b=3
is same as below
b=3 // here b is automatically assign with var b or var b = undefined then var b = 3;
var a = b
 */

// new way here b is not defined
// because b is not automatially get set var b, let b, const b
// reference error b is not defined
/*
(function(){
  var a = b = 3;
})();

*/

/**
 * What is a potential pitfall with using
 * typeof bar === "object" to determine
 * if bar is an object? How can this pitfall be avoided?
 */

/* short ans. 
- because null is also an object
- so, type of bar === null is become true
- to avoid this we have check if bar is not null && type of bar is object
example below
*/
// test types
const obj1 = "a";
const obj2 = null;
const obj3 = {};
const obj4 = function () {};
const obj5 = [];
const obj6 = 1;
const obj7 = true;
// is object

function isObject(obj) {
  if (obj !== null && !Array.isArray(obj) && typeof obj === "object") {
    return true;
  }
  return false;
}

// console.log(isObject(obj7));

// is function [making for fun]
function isFunction(obj) {
  if (typeof obj === "function") {
    return true;
  }
  return false;
}
// console.log(isFunction(obj4));
