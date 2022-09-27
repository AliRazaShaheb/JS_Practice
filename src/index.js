import "./styles.css";

console.clear();
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

// palindron function
/**
 * examples
 * redivider, deified, civic, radar, level,
 * rotor, kayak, reviver, racecar, madam, and refer.
 */

function palindromCheck(str) {
  if (typeof str !== "string" || str.length < 2) {
    return console.error("please put word in string formate");
  }
  let reverseStr = str.split("").reverse().join("");
  return str === reverseStr;
}

// console.log(palindromCheck("level"))
