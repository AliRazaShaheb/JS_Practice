/*
1. Remove all even integers from an array
Input: [4, 1, 9, 10, 15, 22, 5, 14]

Output: [4, 10, 22, 14]
*/
// solution-1
const input = [4, 1, 9, 10, 15, 22, 5, 14];
function isOddNums(arr) {
  // new array - push even number - return array
  let evenArray = [];
  for (let val of arr) {
    if (val % 2 !== 0) {
      evenArray.push(val);
    }
  }
  console.log(evenArray);
}

// isOddNums(input);

// solution-2
const evenArray = input.filter((ele) => ele % 2 === 0);
// console.log(evenArray);

/*
  2. Find all repeated numbers from an array
Input: [1,2,4,5,6,1,3,7,9,10]

Output: [1, 2, 4, 5, 6, 3, 7, 9, 10]
*/

// solution -1
function hasUnique(arr) {
  let unique = [];
  let objKeys = {};
  for (let value of arr) {
    objKeys[value] = null;
  }
  Object.keys(objKeys).map((each) => unique.push(Number(each)));

  console.log(unique);
  return unique;
}

// hasUnique(input2);

function hasUnique2(arr) {
  let unique = [...new Set(arr)];
  console.log(unique);
  return unique;
}

// hasUnique2(input2)
let input2 = [1, 2, 4, 5, 5, 6, 1, 3, 7, 9, 10];
function countDuplicate(arr) {
  let obj = {};
  let count = 1;
  for (let value of arr) {
    if (obj[value] !== undefined) {
      obj[value] += count;
    } else {
      obj[value] = count;
    }
  }
  return obj;
}
// console.log(countDuplicate(input2))

function countDuplicate1(arr) {
  let obj = {};
  arr.forEach((item) => {
    obj[item] = (obj[item] || 0) + 1;
  });

  return obj;
}

// console.log(countDuplicate1(input2))

arr.reduce((acc, curr) => {
  return { ...acc, [curr]: (acc[curr] || 0) + 1 };
}, {});