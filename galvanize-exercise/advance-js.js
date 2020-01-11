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
//Added sub folders

//***********************************
//***********************************
//Conditionals 5
//1)isOddLength

function isOddLength(word) {
  if (word.length % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

//***********************************
//2)isEvenLength 

function isEvenLength(word) {
  if (word % 2 === 0) {
    return true;
  } else return false;
}

var output = isEvenLength('wow');
console.log(output); // --> false

//***********************************
//3)isEvenAndGreaterThan10

function isEvenAndGreaterThan10(num) {
  if (num % 2 === 0 && num > 10) {
    return true;
  } else {
    return false;
  }
}

var output = isEvenAndGreaterThanTen(13);
console.log(output); // --> false

//***********************************
//***********************************
//Math 1
//1) average
function average(num1, num2) {
  let average = ((num1 + num2)/2) ;
  return average;
}

var output = average(4, 6);
console.log(output)// --> 5

//***********************************
//2) computeAreaOfATriangle
function computeAreaOfATriangle (base, height) {
  let area = (base * height)/2;
  return area;
}

var output = computeAreaOfATriangle(4, 6);
console.log(output); // --> 12

//***********************************
//3) cube
function cube(num) {
  let number = num**3;
  return number;
}

var output = cube(3);
console.log(output); // --> 27

//***********************************
//4) square

function square(num) {
  let number = num**2;
  return number;
}

var output = square(5);
console.log(output); // --> 25

//***********************************
//***********************************
//String Methods 2
//1) computeAverageLengthOfWords

function computeAverageLengthOfWords(word1, word2) {
  var length1 = word1.length;
  var length2 = word2.length;
  var sum = (length1 + length2)/2
  return sum;
}

var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6

//***********************************
//***********************************
//Objects 2
//1) addFullNameProperty

function addFullNameProperty(obj) {
  var firstName = obj.firstName;
  var lastName = obj.lastName;
  var fullName = firstName + ' ' + lastName;
  obj['fullName'] = fullNameValue;
}

var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'

//***********************************
//2) addObjectProperty

function addObjectProperty(obj1, key, obj2) {
  obj1[key] = obj2;
}

var person1 = {
  name: 'Joe Blow',
  role: 'schlub'
};
var person2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
};
addObjectProperty(person1, 'manager', person2);
console.log(person1.manager); // --> { name: 'Mr. Burns', role: 'supervisor' }

//***********************************
//3)isPersonOldEnoughToDrinkAndDrive

function isPersonOldEnoughToDrinkAndDrive() {
  return false;
}

var obj = {
  age: 45
};
var output = isPersonOldEnoughToDrinkAndDrive(obj);
console.log(output); // --> false

//***********************************
//***********************************
//Objects 3
//1)isPersonOldEnoughToDrive
function isPersonOldEnoughToDrive() {
  let age = person.age;
  if (age >= 16) {
    return true;
  } else {
    return false;
  }
}

var obj = {
  age: 16
};
var output = isPersonOldEnoughToDrive(obj);
console.log(output); // --> true

//coding exercise, need to at least do one exercise (function)

//***********************************
//2)isPersonOldEnoughToVote

function isPersonOldEnoughToVote(person) {
 
  var age = person.age;
  if (age >= 18) {
      return true;
  } else {
      return false;
  }
};

var obj = {
  age: 19
};
var output = isPersonOldEnoughToVote(obj);
console.log(output); // --> true

//***********************************
//3) addArrayProperty

function addArrayProperty(obj, key, arr ) {
  obj[key] = arr;
}

var myObj = {};
var myArray = [1, 3];
addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj.myProperty); // --> [1, 3]

//Started training on codeacademy again

//***********************************
//***********************************
//Array Methods 1
//1) getNthElement

function getNthElement(array, n) {
  var element = array[n];
  return element;
}

var output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3

//codeacademy exercise

//***********************************
//2) getFirstElement  

function getFirstElement(array) {
  var firstElement = array[0];
  return firstElement;
}

var output = getFirstElement([1, 2, 3, 4, 5]);
console.log(output); // --> 1

//Continue codeacademy

//***********************************
//3) getLastElement

function getLastElement(array) {
  var lastElement = array[array.length -1];
  return lastElement;
}

var output = getLastElement([1, 2, 3, 4]);
console.log(output); // --> 4

//***********************************
//***********************************
//Array Methods 2
//1) addToFront

function addToFront(arr) {
  arr.unshift();
  return arr
}

var output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]

//***********************************
//2) addToBack

function addToBack(arr, element) {
  arr.push(element);
  return arr;
}

var output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]

//practice ES6

//***********************************
//***********************************
//Math 2
//1) computeAreaOfARectangle

function computeAreaOfARectangle(length, width) {

  var area = length * width;
  return area;
}

var output = computeAreaOfARectangle(4, 8);
console.log(output); // --> 32

//new year, start applying for new positions

//2) computePerimeterOfARectangle

function computePerimeterOfARectangle(length, width) {
  var parimeter = length + length + width + width;
  return parimeter;
}

var output = computePerimeterOfARectangle(5, 2);
console.log(output); // --> 14

//Job hunting and 100 days of code. (100 - 4)

//thorough study of linkedlist

//3) computePerimeterOfATriangle

function computePerimeterOfATriangle(side1, side2, side3) {

  var triangle = side1 + side2 + side3;
  return triangle;
}

var output = computePerimeterOfATriangle(6, 7, 10);
console.log(output); // --> 23

//arrays, hash tables, linkedlist, stacks, queues, trees