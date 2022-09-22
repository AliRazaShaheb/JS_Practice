// working as expected
/*
for (let i = 0, count = 5; i < count; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
*/

// worked with var like this
/*
for (var i = 0, count = 5; i < count; i++) {
  counterPrint(i);
}

function counterPrint(num) {
  setTimeout(() => {
    console.log(num);
  }, num * 1000);
}
*/

// worked as expected with var
/*
for (var i = 0, count = 5; i < count; i++) {
  ((number) => {
    setTimeout(() => {
      console.log(number);
    }, number * 1000);
  })(i);
}
*/
// also worked
/*
for (var i = 0, count = 5; i < count; i++) {
  (function (number) {
    setTimeout(() => {
      console.log(number);
    }, number * 1000);
  })(i);
}
*/

/*
var Storm = function () {};
console.log(Storm.prototype)
Storm.prototype.precip = 'rain';

var WinterStorm = function () {};
// console.log(WinterStorm.prototype)
WinterStorm.prototype = new Storm();

console.log(WinterStorm.prototype)
WinterStorm.prototype.precip = 'snow';


var bob = new WinterStorm();
console.log(bob.precip)
*/

// function Logthis(){
//   'use stric'
// this.logg = "logger"
//  console.log(this)
// }

// new Logthis()

// var cat = { name: "Athena" };

// function swap(feline) {
//   feline.name = "Wild";
//   feline = { name: "Tabby" };
// }

// swap(cat);
// console.log(swap(cat));
// console.log(cat.name);

const a = { x: 1 };
const b = { x: 1 };

// console.log(a["x"] === b["x"]);
// console.log(a.x === b.x);
// console.log(a === b);
// console.log([] == []);
// console.log({} == {});

// if (true) {
//   var x = 5;
//   const y = 6;
//   let z = 7;
// }
// console.log(x + y + z);
