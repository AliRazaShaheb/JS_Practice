import "./styles.css";
console.clear();
// 1. understanding call();
// call(consumerReference, ...methodParameters = optional)

/**
 * call is the special function which can be used for
 * borrowing methods of Class, FuctionsConstructors, Objects
 * example as given below
 */

// object example
const person1 = {
  firstName: "Ali",
  lastName: "Raza",
  // 1-way of writing method in a object
  fullname: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
  // 2-way of writing method in a object
  fullname2() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
};
// print to console with original object
person1.fullname();

// now person 2 object will borrow a function of person 1 object
const person2 = {
  firstName: "Shamsher",
  lastName: "Ali"
};

// borrow a fullname method from person 1 object
// call with parameter details
// providerObject.Method.call(consumerObject)
// print to console with borrower object
person1.fullname.call(person2); // just called or borrowed

//debugging
//  person1.fullname();

/**
 * now best practice
 * rather keep method in object/class
 * its the best practice to keep/make the funtions/methods separately
 * example as below
 */

const personObj1 = {
  firstName: "Abdul",
  lastName: "Mateen"
};
// separating the method  from object to global scope
// just like a seprate function

const fullNamePrinter = function () {
  console.log(`${this.firstName} ${this.lastName}`);
};

// now method can be borrowed
fullNamePrinter.call(personObj1);

const personObj2 = {
  firstName: "Razia",
  lastName: "Praween"
};
fullNamePrinter.call(personObj2);

/**
 * Now what if method which we are borrowing/calling requires parameter
 * see the example below
 */
const fullNamePrinterWithAddress = function (address) {
  console.log(`${this.firstName} ${this.lastName} from ${address}`);
};

fullNamePrinterWithAddress.call(personObj2); // you will see first - lastname from undefined
fullNamePrinterWithAddress.call(personObj2, "Taslim Tola Plasmani, Ward No.4");
// you will see first name, lastname from (with above address)

//2. understanding apply()
/**
 * its same as call
 * Apply(referenceObject, [arguments in a array])
 * instead passing argument seprately, we have pass argument if any or as much as you have to
 * in an array
 */
fullNamePrinterWithAddress.apply(person1, ["Taslim Tola Plasmani, Ward No.4"]);

//3. understanding bind()
/**
 * same as call()
 * rather call the method directly it returns new method
 * its takes the reference object properties and provider method then  bind them into new method and returns
 * bind make a new function / return a new function which can be called later on when needed.
 * example below
 */

// bind example-1
const AliRazaFullName = fullNamePrinter.bind(person1);
AliRazaFullName();

//quick recap / example

/* 
 1. call() normal aguments by separating by ,
 method.call(referenceProperty, arg, arg2 ...rest)
 object.method.call(referenceProperty, arg, arg2 ...rest)

 2. apply() argument in an array
 method.apply(referenceProperty, [arg, arg2 ...rest])
 object.method.apply(referenceProperty, [arg, arg2 ...rest)

 3. bind() // bind reference method and property and return new method which can called later
 const newMethod = method.bind(referenceProperty,  arg, arg2 ...rest)
 const newMethod = object.method.bind(referenceProperty,  arg, arg2 ...rest)
*/
