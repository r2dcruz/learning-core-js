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
