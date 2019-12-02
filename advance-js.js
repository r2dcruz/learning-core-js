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
//Objects
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