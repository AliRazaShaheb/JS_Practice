// #1 Create a variable called hello and assign it the string 'goodbye'
const hello = "goodby";
// console.log(hello)
// #2 Use the variable iLove to create a new variable called iLoveCode that is assigned the string "I love code"
var iLove = "I love";
let iLoveCode = iLove + " code";
// console.log(iLoveCode)

// #3  Make an object called bob and give it the following properties
// bob has a height of 6ft (string)
// bob has an age of 24 (Number)
// bob has hair, that has style spikey, and color brown (object)
// bob is not presidentOfTheUnitedStates (boolean)
// bob likes apples, bananas, and cherries (array of strings)
const bob = {
  height: "6ft",
  age: 24,
  hair: {
    style: `spikey`,
    color: "brown"
  },
  presidentOfTheUnitedStates: false,
  likes: ["apples", "ananas", "cherries"]
};
// console.log(bob)
// #4 Change my shirt color to pink using dot notation
var myShirt = {
  type: "polo",
  color: "red"
};
myShirt.color = "pink";
// console.log(myShirt.color)

// Change my shirt type to spandex using square bracket notation
var myOtherShirt = {
  type: "polo",
  color: "red"
};
myOtherShirt["type"] = "spandex";
// console.log(myOtherShirt)

// #5 Create an object that tracks a count of animals in a zoo.  Call it 'zoo'
// The key should be the animal name(string) and the value should be how many there are.
// Our zoo has 8 monkeys, 4 giraffes and 2 elephants
const zoo = {
  monkeys: 8,
  giraffes: 4,
  elephants: 2
};

// #6 Loop through this object and change all keys that start with the letter s to have a value of 's'

var snake = {
  sliters: "sideways",
  eats: "rodents",
  says: "ssss",
  smells: "heat",
  runs: "legless"
};
Object.keys(snake).forEach((each) => {
  if (each.startsWith(`s`)) {
    snake[each] = "s";
  }
});
// console.log(snake)

//#7 Create an array of strings that are the 7 primary colors in the rainbow - red, orange, yellow, green, blue, indigo, violet (lower-case). Call your array rainbowColors
const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo"];
// console.log(rainbowColors)

// #8 Using this array do the following
var heroes = ["superman", "batman", "flash"];
// add 'wonderwoman' to the end
// heroes.push('wonderwoman')
// console.log(heroes)
// remove 'superman' and store him in a variable called firstHero
const firstHero = heroes.shift();
// console.log(firstHero)
// console.log(heroes)

// add 'spongebob' to the start of the array
heroes.unshift("spongebob");
// console.log(heroes)
// remove 'flash' from the array and store him in a variable called secondHero
const secondHero = heroes.pop();
// console.log(heroes)
// console.log(secondHero)
// leave batman in the array but put a copy of him on a variable called thirdHero
const thirdHero = heroes[heroes.length - 1];
// console.log(thirdHero)

// #9 Write a function called addItem that takes in an array and an item, adds the item to
// the array, and returns the array with the added item.
const itemArr = [1, 2, 3, 4];
function addItem(arr, item) {
  return [...arr, item];
}
const addedNewArr = addItem(itemArr, 10);
// console.log(addedNewArr)
// #10 Write a function called removeItem that takes in an array of strings, and a string.

// Removes all instances of that string from the array. And return the modified array.
// The order of the array should not be changed
const arr = [1, 2, 2, 6, 2, 3, 4, 5];

function removeItem(arr, str) {
  //option -1 filter
  // const newArr = arr.filter((each) => {
  //   return each !== str;
  // });
  //option - 2 splice
  for (let i = 0, l = arr.length; i < l; i++) {
    if (arr[i] === str) {
      arr.splice(i, 1);
      // i-- if you dont do i--, one match item remain... says it still increment from the top.
      // i-- for removing all matchig item in splice
      i--;
    }
  }
  return arr;
}
// console.log(removeItem(arr, 2));

// #11 Write a function  called doubleTheFun that takes 1 parameter. It should double numbers, and
// repeats strings. example 4->8, 2.5->5, 'Awesome'->'AwesomeAwesome'

function doubleTheFun(input) {
  let result = 0;

  // if (isNaN(input)) {
  //   result = input + input;
  // } else {
  //   result = input * input;
  // }
  if (typeof input === "string") {
    result = input + input;
  }
  if (typeof input === "number") {
    result = input * input;
  }
  return result;
}

// console.log(doubleTheFun(undefined));

// #12 Write function getValueOfProperty that takes in an object, and the name of a property on the object
// return the value from the object that corresponds to the property
const obj = {
  name: "ali raza",
  age: 33
};

const getValueOfProperty = (obj, property) => {
  if (typeof property === "string") {
    return obj[property];
  }
  console.log("please input property in string formate");
  return "";
};

// console.log(getValueOfProperty(obj, 'age'));

// #13 Write a function called makeChatMessage that takes in a message and author as parameters
// and returns an object with a message, author, and timestamp, that is
// the current time as a Date object
function makeChatMessage(author, message) {
  let date = new Date();
  let d = date.getDate();
  let m = date.getMonth();
  let y = date.getFullYear();
  let m1 = m < 9 ? "0" + m : 0;
  return {
    author,
    message,
    timestamp: `${d}/${m1}/${y}`
  };
}

// console.log(makeChatMessage("Ali Raza", "Hello people"));

// #14 Create a function called coderTest that takes in an object that is a person.
// It looks to see if the person’s name is Jeremy and then changes the person object to have a
// property called lovesCode with a value of 10.  If their name is Brack set lovesCode to 0.
//otherwise set lovesCode to 5.

function coderTest(person = { name: "" }) {
  if (person.name === "Jeremy") {
    person.lovesCode = 10;
    return person;
  }
  if (person.name === "Brack") {
    person.lovesCode = 0;
    return person;
  }
  person.lovesCode = 5;
  return person;
}
const testPerson = {
  name: "something"
};

// console.log(coderTest(testPerson));

/* #15 Create a function called outside that takes in a 
temperature (number), a humidity(number), and a cloudiness(number), 
in that order. Using the following to return the correct values */
/*
    temperature over 80 and humidity over 40 - return "I'm all sweat"
    temperature under 40 and cloudiness over 60 - return "I have icicles"
    temperature over 80 and humidity under 40 and cloudiness under 20 - return "I'm literally in the desert"
    temperature over 80 or humidity over 50 or cloudiness over 50 - return "Hmm, probably not"
    Otherwise - return "I love outside"
*/

function outside(temp, humd, cloudi) {
  if (temp > 80 && humd > 40) return "I'm all sweat";
  if (cloudi > 60) return "I have icicles";
  if (temp > 80 && humd < 40 && cloudi < 20)
    return "I'm literally in the desert";
  if (temp > 80 || humd > 50 || cloudi > 50) return "Hmm, probably not";
  return "I love outside";
}

// console.log(outside(81,39, 19))

// #16 Create a function called callerBack that takes in a function (holla)
// and a string parameter(back) and invokes it(holla) with the argument string(back) + ' back'."
// example - If I call you with 'Give it' you should invoke holla with 'Give it back'

function callerBack(holla, back) {
  return holla(back) + " back";
}
const back = "give it";
const hola = (str) => str;
// console.log(callerBack(hola, back));
