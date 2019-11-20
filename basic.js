//Currently this is where all the basic js will go
//***********************************

//1) Numbers
function addTwo(num) {
  // return the input number plus 2
  return num + 2;
}

//***********************************

//2) strings
function addTwo(num) {
  // return the input number plus 2
  return num + 2;
}

//***********************************

//3) arrays 1
function returnArray(array) {
  // return the array
  return array;
}

//***********************************

//4) arrays 2
function returnAnElement(array, index) {
  // returns array element at given index
  return array[index];
}

//***********************************

//5) arrays 3
function createAndReturnAnArray() {
  // create an array
  var array = [];
  // return the created array
  return array;
}

//***********************************

//6) objects 1
function returnObject(object) {
  // return the object
  return object;
}

//***********************************

//7) objects 2

function returnAValue(obj, key) {
  // returns value of inputted object's property located at key
  return obj[key];
}

//***********************************

//8) objects 3

function createAndReturnAnObject() {
  // create an object
  var obj = {};
  // return the created object
  return obj;
}

//***********************************

//9) objects 4
function getType(param) {
  //returns the type of param
  return typeof param;
}

//***********************************

//10) objects 5
function determineIsArray(input) {
  //assign result variable to call Array.isArray
  var result = Array.isArray(input);
  //return result variable
  return result;
}

//***********************************
//11) Using the 'not' operator
function opposite(boolean) {
  return !boolean;
}

var outputTrue = opposite(false);
console.log('should be true:', outputTrue)

var outputFalse = opposite(true);
console.log('should be false:', outputFalse)

//***********************************
//12) Using the 'or' operator

function eitherAreTrue(bool_1, bool_2) {
  //create and assign variable to bool_1 OR bool_2
  var result = bool_1 || bool_2;
  //return result variable
  return result;
}

var outputTrue = eitherAreTrue(true, false);
console.log('should be true:', outputTrue);

var outputFalse = eitherAreTrue(false, false);
console.log('should be false:', outputFalse);

//***********************************
//13) Using the 'and' operator

function bothAreTrue(bool_1, bool_2) {
  //create var result and assign to bool_1 AND bool_2
  var result;
  result = bool_1 && bool_2;
  //return result;
  return result;
}

var outputTrue = bothAreTrue(true, true);
console.log('should be true:', outputTrue);

var outputFalse = bothAreTrue(false, true);
console.log('should be false:', outputFalse);

//***********************************
//14) A combination of Booleans

function combination (bool_1, bool_2, bool_3) {
  //create var result
  //assign to bool_1 AND either bool_2 OR bool_3
  //return result variable;
  var result = bool_1;
  var result2= bool_2 || bool_3;
  return result && result2;
}

var outputTrue = combination(true, true, false);
console.log('should be true:', outputTrue);
console.log('should be false:', outputFalse);

//***********************************
//15) Using the 'strict equality' operator

function areEqual(param_1, param_2) {
  //create var result
  //assign it to comparison between
  var result = param_1 === param_2;
  return result;
}
var outputTrue = areEqual('happiness', 'happiness');
console.log('should be true:', outputTrue);

var outputFalse = areEqual(0, false);
console.log('should be false:', outputFalse);

//***********************************
//16) Using the 'strict not equality' operator

function areNotEqual(param_1, param_2) {
  //create var result and assign
  //to comparison between param_1 and param_2 using "not equal to" operator
  var result = param_1 !== param_2;
  return result;
}

var outputTrue = areNotEqual('happiness', 'sadness');
console.log('should be true', outputTrue);

var outputFalse = areNotEqual(7, 3 + 4);
console.log('should be false:', outputFalse);

//***********************************
//17) Using the '+' operator with numbers

function getSum(num1, num2) {
  var sum = num1 + num2;
  return sum;
}

var resultSum = getSum(4,10);
console.log('should be 14: ', resultSum);

//***********************************
//18) Using the '-' operator with numbers

function getDifference (num1, num2) {
  var result = num1 - num2;
  return result;
}

var resultDiff = getDifference(37,19);
console.log('should be 18: ', resultDiff);

//***********************************
//19) Using the '*' operator with numbers

function getProduct(num1, num2) {
  var sum = num1 * num2;
  return sum;
}

var resultProduct = getProduct(9, 4);
console.log('should be 36: ', resultProduct);

//***********************************
//20) Using the '/' operator with numbers

function getquotient(num1, num2) {
  var result = num1 / num2;
  return sum;
}

var resultQuotient = getQuotient(20, 4);
console.log('should be 5: ', resultQuotient);

//***********************************
//21) Using the '**' operator with numbers

function getPower(num1, num2) {
  var result = num1 ** num2;
  return result;
}

var resultPower = getPower(3, 4);
console.log('should be 81: ', resultPower);

//***********************************
//22) Using the '%' operator with numbers

function getRemainder(num1, num2) {
  var result = num1 % num2;
  return result;
}

var resultRemainder = getRemainder(21, 6);
console.log('should be 3: ' resultRemainder);

//***********************************
//23) Using the '+=' operator

function increment (base, incrementer) {
  var result = base += incrementer;
  return result;
}

var resultIncremented = increment(11, 5);
console.log('should be 16: ', resultIncremented);

//***********************************
//24) Using the '-=' operator

function decrement(base, incrementer) {
  var result = base -= decrementer;
  return result;
}

var resultDecremented = decrement(17, 5);
console.log('should be 12: ', resultDecremented);

//***********************************
//25) Using the '*=' operator
function applyTimesEquals(base, multiplier) {
  var result = base *= multiplier;
  return result;
}

var resultMultiplied = applyTimesEquals(3, 5);
console.log('should be 15: ', resultMultiplied);

//***********************************
//26) Using the '/=' operator

function applyDivideEquals(base, divider) {
  var result = base /= divider;
  return result;
}

var resultDivided = applyDivideEquals(56, 7);
console.log('should be 8: ', resultDivided);

//***********************************
//













































