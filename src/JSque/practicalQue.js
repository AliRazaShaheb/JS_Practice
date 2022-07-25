console.clear();
/* Q1: What is the value of foo?
 let foo = 10 + "20";
*/
// my answer - 1020
// **debug - proof
// console.log(foo) // found correct

/* Q2: What will be the output of the code below?
  console.log(0.1 + 0.2 == 0.3); 
*/
// my answer - true;
// **debug - proof
// console.log(0.1 + 0.2 === 0.3); // found false - incorrect answer
// =>reason - not sure why the above is false
// lets find out;
// read this article - https://gauravkk22.medium.com/why-0-1-0-2-0-3-is-false-in-js-mystery-unsolved-with-solution-4f7db2755f18#:~:text=With%20decimal%20fractions%2C%20this%20floating,number%2C%20you%20must%20understand%20binary.
/**
 * JS follows a 32-bit floating point representation
 * for numbers
 * 0.1 + 0.2 = 0.30000000000000004
 * so, its not equal to 0.3
 * */

/**
  * Q3: How would you make this work?
  * add(2, 5); // 7
    add(2)(5); // 7
  */
//my answer
const add = (a, b) => {
  if (!b) return (b) => a + b;
  return a + b;
};
/*
  console.log(add(2, 5)) // found expected result - correct
  console.log(add(2)(5)) // found expected result - correct
*/

/**
  * Q3: What value is returned from the following statement?
  "i'm a lasagna hog".split("").reverse().join("");
  */
//my answer
// will reverse the above text
/*
  how ?
  first string.split("") - will convert this text into an array
  second array.reverse() - will reverse the array
  array.join("") will join the array into string
  so, above text will reverse with above mentioned methods.
*/
// console.log(
//   "i'm a lasagna hog".split("").reverse().join("")
// ) found correct

/*
  * Q3: What is the value of window.foo?
  ( window.foo || ( window.foo = "bar" ) );
*/
//my answer
// console.log(window.foo) // should return "bar"
/*
  how ?
  // window.foo = undefined
 //here window.foo = "bar"
 // so, (undefined || "bar")
*/
// console.log(
//   window.foo || ( window.foo = "bar" )
// ) //found correct

/* Q4.  What is the outcome of the two alerts below?
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);

== my Answer==
alert(foo + bar); //hello world (correct)
alert(foo + bar); // hello world (wrong)
== How ==
self invoked function will alert hello world
it has access both the variable foo & bar
but outside alert will throw a an error as 'bar is not defined'
bar is not accessible outside of function
*/

/* Q4.  What is the value of foo.length?
var foo = [];
foo.push(1);
foo.push(2);

== my Answer== (correct)
value of foo.length = 2
== How ==
[1,2].length = 2
*/

/* Q5.  What is the value of foo.x?
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};

== my Answer== (correct)
foo.x = {n:2} (Wrong)
correct: undefined
== How ==
foo = {n:1}
bar = foo
bar = {n:1}
foo = {n:2}
foo.x = foo
foo.x = {n:2}
 == correct How ==
box1 = [{n:1}]
foo is pointing box1
bar is also pointing box1
now created 
box2=[{n:2}]
now here foo is pointing box2
now we just assign key 'x' to box2 through foo without any value
so it assign default javascript value 'undefined'
*/

import AllPromises from "./JSque/JSPromises";

console.clear();
/* Q6.  What is the value of foo.length?
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
Promise.resolve().then(function() {
  console.log('three');
})
console.log('four');

== my Answer== (correct)

one
four
three
two


== How ==
first run synchrounous code
then javascript promise
then browser API

lets analyse the above code
1. console.log('one'); // synchronous code
2. console.log('four'); // synchronous code
3. here already resolved then .then(calling resolved value)
4. browser API
*/

/*07.  What is the difference between these four promises?

doSomething().then(function () {
  return doSomethingElse();
});

doSomething().then(function () {
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);

== my Answer== 
lets assume do something is resolved
lets doSomethingElse is returning something

case 1
function didn't have parameter this means
resolved value is not get used. 
only doSomething value if return;
will run after resolved

case 2
same as case 1

case 3
if not callback in then 
function in then will execute immediately and will show
no matter it resolved or not.


case 4
same as case 1 and 2
without callback and parameter... resolved value didn't get used
it will show the resolved value
witout calling the function. it will show the resolved value


== How ==
*/

const [promise1] = AllPromises;
// promise1(6)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const benamfunc = (val) => {
//   return console.log(val)
// };

// promise1(6)
//   .then(benamfunc)
//   .catch((err) => {
//     console.log(err);
//   });

/* Q.7 What will the code below output to the console and why?
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
== my Answer== 
a defined ? true (wrong)
b defined ? true (wrong)

my calculation are correct
since the abvoe question confuse me so, got wrong

a defined ? true (correct)
b defined ? true (correct)
reason ===
please see :- self invoked function
var a ; var b
has not access outside of a function
here...
typeof a is undefined
typeof b is undefined

so, it will return false

== How == 
here value get passed from right to left
b is not defined with varible prefixes, in strict mode it will give error.
without strict mode, interpreter will give default
var value to it b=3; so here 
var b = 3
now 
var a == b
so type of a & b are number

a defined ? true
b defined ? true


*/
