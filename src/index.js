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

== my Answer== (correct)
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

const benamfunc = (val) => {
  if (val) return console.log(val);
  console.log("beluga");
};

promise1(6)
  .then(benamfunc())
  .catch((err) => {
    console.log(err);
  });
