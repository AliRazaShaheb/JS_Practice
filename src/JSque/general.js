const a = [1, 2, 3];
// here a is reference the array
const b = a;
// here b is reference to the same array
// means
// One array
// Two reference
b[0] = 10;
// here changing the array value with reference No.2
a[0] = 11;
// here changing the array value with reference No.1
console.log(b);
// array has changed
console.log(a);
// array has changed

// note: there is no two array,
// one array with two reference for access and modify

// whats an an array
/**
 * pritime value - can be number, string, boolean, null, undefined, symbol
 * reference type - array, object
 * structure of a value
 * single value i.e. '5', if you want access this value you need reference which point to this value
 * here CONSTANT, VARIABLE comes in picture
 * let n = 5, now you can access this value using 'n'
 * now other type 'reference type value'
 * like array & object
 * multiple value or colelction of values
 * like let array = [1,5,6,7]
 * here is array is pointing multiple / colelction of values
 * inside collection of values every value has its identity
 * incase of 1 in the above array
 * value '1' has identity its index which is '0'
 * here index is the referece/ identity to the value
 * in array index/ references is auto generated number/intiger in sequence  way like 0,1,2,3,4 ...n
 * NOW OBJECT
 * let obj = {a:1, b:2}
 * object has same concept of refernce as array.
 * but its refernce called 'key' and & its value/data called 'value';
 * its key is/should be in string formate
 * its value could be anything.
 * THERE'S ANOTHER OBJ CALLED 'MAP' in javascript
 * it is same but key could be anything, value could be anything
 * it is iterable
 * etc.
 */

/* 27-09-2022
var a = {},
  b = { a: "c" },
  c = { c: "b" };

a[b] = 5;

// console.log(a)

var a = {},
  b = { key: "b" },
  c = { key: "c" };

a[b] = 123;
a[c] = 456;
a["hello"] = 123;
a[[]] = "arr";
a[{}] = "aa";
a[c] = "dd";
a[[]] = "ss";

// console.log(a);

// console.log(
//   (function f(n){
//     return (
//       (n > 1) ? n * f(n-1) : n)
//   })(10)
// );

function f(n) {
  if (n > 1) return n * f(n - 1);
  return 1;
}

// console.log(f(10))
// '10x9x8x7x6x5x4x3x2x1'

var hero = {
  _name: "John Doe",
  getSecretIdentity: function () {
    return this._name;
  }
};

var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);

// console.log(stoleSecretIdentity());
// console.log(hero.getSecretIdentity());
// console.log(hero.getSecretIdentity());

let foo = "hello";

const obj = {
  foo: "peter",
  dd() {
    console.log(this.foo);
    var self = this;
    function soo() {
      console.log(self.foo);
    }
    soo();
  }
};
*/
