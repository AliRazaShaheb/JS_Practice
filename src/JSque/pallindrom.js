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

function isPalindrome(str) {
  str = str.replace(/\W/g, "").toLowerCase();
  console.log(str);
  return str == str.split("").reverse().join("");
}

isPalindrome("reviver");
