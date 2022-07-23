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
