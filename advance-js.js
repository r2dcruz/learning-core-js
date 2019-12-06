//***********************************
//***********************************
//Conditionals 1
//1) isOldEnoughToDrink

function isOldEnoughToDrink(age) {
  return age >= 21;
}

//***********************************
//2) isOldEnoughToDrive

function isOldEnoughToDrive(age) {
  // your code here
  if (age >= 16) {
      return true;
  } else {
      return false;
  }
}

var output = isOldEnoughToDrive(22);
console.log(output); // --> true

//***********************************
//3) isOldEnoughToVote

function isOldEnoughToVote(age) {
  // your code here
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

The legal voting age in the United States is 18.
var output = isOldEnoughToVote(22);
console.log(output); // --> true

//***********************************
//4) isOldEnoughToDrinkAndDrive

function isOldEnoughToDrinkAndDrive(age) {
  // your code here
    return false;
}

var output = isOldEnoughToDrinkAndDrive(22);
console.log(output); // --> false

//***********************************
//***********************************
//Objects 1
//1) getProperty

function getProperty(obj, key) {
  return obj[key];
}

var obj = {
  key: 'value'
};
var output = getProperty(obj, 'key');
console.log(output); // --> 'value'

//***********************************
//2) getProperty

function addProperty(obj, key) {
  // your code here
  obj[key] = true;
}

var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true

//***********************************
//3) removeProperty

function removeProperty(obj, key) {
  // your code here
  delete obj[key];
}

var obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name');
console.log(obj.name); // --> undefined

//***********************************
//***********************************
//Strings Method 1
//1) getFullName

function getFullName(firstName, lastName) {
  return firstName + ' '+ lastName;// your code here
}

var output = getFullName('Joe', 'Smith');
console.log(output); // --> 'Joe Smith'

//***********************************
//2) getLengthOfWord

function getLengthOfWord(word) {
  var length = word.length;
  return length;
}

var output = getLengthOfWord('some');
console.log(output); // --> 4

//***********************************
//3) getLengthOfTwoWords

function getLengthOfTwoWords(word, word2) {
  var length1 = word1.length;
  var length2 = word2.length;
  return length1 + length2;
}

var output = getLengthOfTwoWords('some', 'words');
console.log(output);// --> 9

//***********************************
//***********************************
//Conditionals 2
//1) checkAge

function checkAge(name, age) {
  // your code here
  if (age >= 21){
    return 'Welcome, ' + name + '!';
  } else {
    return 'Go home, ' + name + '!';
  }
}

var output = checkAge('Adrian', 22);
console.log(output); // --> 'Welcome, Adrian!'

//***********************************
//2) isGreaterThanTen
function isGreaterThan10(num) {
  if (num > 10) {
    return true;
  } else {
    return false;
  }
}

var output = isGreaterThan10(11);
console.log(output); // --> true

//***********************************
//3) isLessThan30
function isLessThan30(num) {
  if (num < 30) {
    return true;
  } else {
    return false;
  }
}

var output = isLessThan30(9);
console.log(output); // --> true

//***********************************
//4) egaulsTen
function equalsTen(num) {
  if (num === 10) {
    return true;
  } else {
    return false;
  }
}
var output = equalsTen(9);
console.log(output); // --> false

//***********************************
//***********************************
//Conditionals 3
//1) isLessThan
function isLessThan(num1, num2) {
  return num2 < num1;
}

var output = isLessThan(9, 4);
console.log(output)// --> true

//***********************************
//2) isGreaterThan
function isGreaterThan(num1, num2) {
  return num2 > num1;
}

var output = isGreaterThan(11, 10);
console.log(output);

//***********************************
//3) isEqualTo

function isEqualTo(num1, num2) {
  return num1 === num2;
}

var output = isEqualTo(11, 10);
console.log(output);

//***********************************
//4) isEven
function isEven(num) {
  if (num % 2) {
    return true;
  } else {
    return false;
  }
}

var output = isEven(2);
console.log(output); // --> true

//ramping up on freeCodeCamp, basic javascript and it is getting difficult. 
//One question that got me stump is Record Collection
/** You are given a JSON object representing a part of your musical album 
collection. Each album has several properties and a unique id number as its key.
Not all albums have complete information

write a function which takes an album's id, a property prop (like or), 
and a value to modify the data in this collection.

Will create a separate page for the questions i still need practice on
**/

//***********************************
//***********************************
//Conditionals 4
//1) isOdd

function isOdd (num) {
  if (num % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

var output = isOdd(9);
console.log(output) // --> true

//***********************************
//2) isSameLength

function isSameLength(word1, word2) {
  if (word1 === word2) {
    return true;
  } else {
    return false;
  }
}

var output = isSameLength('big', 'small');
console.log(output);// --> false

//***********************************
//3) isBothOdd

function isBothOdd(num1, num2) {
  if (num1 % 2 === 1 && num2 % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

var output = areBothOdd(1, 3);
console.log(output); // --> true

//***********************************
//4) isEitherEven

function isEitherEven(num1, num2) {
  if (num1 % 2 === 0 || num2 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

var output = isEitherEven(1, 4);
console.log(output); // --> true

//Learned about replacing Loops using Recursion. Still requre practice
