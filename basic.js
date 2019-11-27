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
//27) Using the 'Math.abs()' method

function getAbsoluteValule(num) {
  var result = Math.abs(num);
  return result;
}

var result1 = getAbsoluteValule(-53);
console.log('should be 56: ', result1);

var result2 = getAbsoluteValule(127);
console.log('should be 127: ', result2);

//***********************************
//28) Using the 'Math.floor()' method

function roundDown(num) {
  var result = Math.floor(num);
  return result;
}

var roundedDown = roundDown(6.8);
console.log('should be 6: ', roundedDown);

//***********************************
//29) Using the 'Math.ceil()' method

function roundUp(num) {
  var result = Math.ceil(num);
  return result;
}

var roundedUp = roundUp(16.8)
console.log('should be 17:', roundedUp)

//***********************************
//30) Using the 'Number.parseInt()' method

function applyParseInt(numString) {
  var result = Number.parseInt(numString);
  return result;
}

var parsedInteger = applyParseInt('23');
console.log('should be 23: ', parsedInteger);

//***********************************
//31) Using the 'Number.parseFloat()' method

function applyParseFloat(numString) {
  var result = Number.parseFloat(numString);
  return result;
}

var parsedFloat = applyParseFloat('101.78');
console.log('should be 101.78: ', parsedFloat);

//***********************************
//32) Using the 'Math.random()' method

function generateRandomNumber(min, max) {
  var result = Math.random() * (max - min) + min;
  return result;
}

var randomNumber = generateRandomNumber(1, 10);
console.log('should be between 1 and 10: ', randomNumber);

//***********************************
//33) Using the '>' operator

function applyGreaterThan(num1, num2) {
  var result = num1 > num2;
  return result;
}

var trueGreaterThanResult = applyGreaterThan(101, 10);
console.log('should be true: ', trueGreaterThanResult);

var falseGreaterThanResult = applyGreaterThan(-13, 2);
console.log('should be false: ', falseGreaterThanResult);

//***********************************
//34) Using the '<=' operator
function applyLessThanOrEqualTo(num1, num2) {
  var result = num1 <= num2;
  return result;
}

var trueLessThanOrEqualToResult = applyLessThanOrEqualTo(11, 110);
console.log('should be true: ', trueLessThanOrEqualToResult);

var falseLessThanOrEqualToResult = applyLessThanOrEqualTo(-13, -21);
console.log('should be false: ', falseLessThanOrEqualToResult);

//***********************************
//35) Creating a string

function createString() {
  var result = 'string';
  return result;
}

var resultString = createString();
console.log('should be a string type: ', resultString);

//***********************************
//36) Accessing a Character in a string

function accessACharacter(string, index) {
  var result = string[index];
  return result;
}

var resultCharacter = accessACharacter('Computer', 3);
console.log('should be \'p\': ' resultCharacter);

//***********************************
//37) Reassigning a String's Value

function reassignAString(string) {
  string = 'reassigned';
  return string;
}

var resultString1 = reassignAString('Computer Science');
console.log('should be "reassigned": ',resultString1 );

var resultString2 = reassignAString('Software Engineering');
console.log('should also be "reassigned":', resultString2);

//***********************************
//38) Concatenate two strings
function addTogetherTwoStrings(string1, string2) {
  var result = string1 + string2;
  return result;
}

var resultString1 = addTogetherTwoStrings('Comp', 'uter');
console.log('should be "Computer":', resultString1);

var resultString2 = addTogetherTwoStrings('Engin', 'eering');
console.log('should also be "Engineering":', resultString2);

//***********************************
//39) Concatenate two strings into a full name

function createFullName(firstName, lastName) {
  var fullName = firstName + ' ' + lastName;
  return fullName;
}

var resultFullName1 = createFullName('Duevyn', 'Cooke');
console.log('should log Duevyn Cooke:', resultFullName1);

var resultFullName2 = createFullName('Ada', 'Lovelace');
console.log('should log Ada Lovelace:', resultFullName2);

//***********************************
//40)String Interpolation

function interpolateAString(activity, dayOfTheWeek) {
  var result = 'We will go ' + activity + ' on ' + dayOfTheWeek + '.';
  return result;
}

var resultMessage1 = interpolateAString('hiking', 'Tuesday');
console.log('Should log "We will go hiking on tuesday.": ', resultMessage1);

var resultMessage2 = interpolateAString('dancing', 'Friday');
console.log('Should log "We will go dancing on Friday.": ', resultMessage2);

//***********************************
//41) Get length of string
function getStringLength (string) {
  var length;
  length = string.length;
  return length;
}

var resultLength1 = getStringLength('Apple');
console.log('should log 5: ', resultLength1);

var resultLength2 = getStringLength('Microsoft');
console.log('should log 9: ', resultLength2);

//***********************************
//42) Get last character of string
function getLastCharacter (string) {
  var lastIndex = string.length;
  var lastCharacter = string[lastIndex - 1];
  return lastCharacter;
}

var resultLastCharacter1 = getLastCharacter('Banana');
console.log('should log "a": ', resultLastCharacter1);

var resultLastCharacter2 = getLastCharacter('Macrofirm');
console.log('should log "m": ', resultLastCharacter2);

//***********************************
//43) Apply substring method

function applySubString(string, start, end) {
  var subString = string.substring(start, end);
  return subString;
}

var string1 = 'Queue';
var resultSubstring1 = applySubString(string1, 1, 4);
console.log('should log "ueu": ', resultSubstring1);

var string2 = 'Stack Trace';
var resultSubstring2 = applySubString(string2, 2, 10);
console.log('should log "ack Trac": ', resultSubstring2);

//***********************************
//44) Apply indexOf Method

function applyIndexOf(string, substring){
  var indexVariable = string.indexOf(subString);
  return indexVariable;
}

var string1 = 'Quicksort';
var subString1 = 'sort';
var resultIndex1 = applyIndexOf(string1, subString1);
console.log('should log 5: ', resultIndex1);

var string2 = 'size,color,cut,price';
var subString2 = 'cut';
var resultIndex2 = applyIndexOf(string2, subString2);
console.log('should log 11: ', resultIndex2);

//***********************************
//45) Apply toString Method

function applyToString(param) {
  var stringVersion = param.toString();
  return stringVersion;
}

var input1 = 9374;
var resultString1 = applyToString(input1);
console.log('should log "9374": ', resultString1);
console.log('type should be "string": ', typeof resultString1);

var input2 = false;
var resultString2 = applyToString(input2);
console.log('should log "false": ', input2);
console.log('type should be "string": ', typeof resultString2);

//***********************************
//46) Using Escape Characters

function generateHaiku(firstLine, secondLine, thirdLine) {
  var haiku = firstLine + '\n' + secondLine + '\n' + thirdLine;
  return haiku;
}

var resultHaiku1 = generateHaiku('In the twilight rain', 'these brillant-hued hibiscus -', 'A lovely sunset.');
console.log('should log formatted haiku:\n', resultHaiku1);

var resultHaiku2 = generateHaiku('The lamp once out', 'Moves west, flowers\ shadows', 'Creep eastward.');
console.log('should log formatted haiku:\n', resultHaiku2);

//***********************************
//47)Creating an Array

function createArray() {
  var result = [];
  return result;
}

var resultArray = createArray();
console.log('Should be an array: ', resultArray);

//***********************************
//48) Accessing an Element in an Array
function accessingAnElemnent(array, index) {
  var result = array[index];
  return result;
}

var resultElement = accessingAnElemnent(['Computer', 'Mouse', 'Ethernet Cable'], 1);
console.log('Should be "Mouse": ', resultElement);


//***********************************
//49) Reassigning an Element in an Array
function reassigningAnElement(array, index, newValue) {
  var newArray = array[index] = newValue;
  return newArray;
}

var resultArray = reassigningAnElement(['desk', 'lamp', 'chewtoy'], 2, 'textbook');
console.log('should replace chewtoy with textbook: ', resultArray);

//***********************************
//50) Get length of an Array

function getArrayLength(array) {
  var length = array.length;
  return length;
}

var resultLength1 = getArrayLength([1, 3, 4, 5, 7]);
console.log('should log 5:', resultLength1);

var resultLength2 = getArrayLength(['a', 'b', 'c', 'd']);
console.log('should log 4:', resultLength2);

//***********************************
//51) Get last element of array
function getLastElement(array) {
  var result = array[array.length - 1];
  return result;
}

var resultLastElement1 = getLastElement([1, 2, "buckle", "my", "shoe"]);
console.log('should log "shoe":', resultLastElement1);

var resultLastElement2 = getLastElement([3, 4, "shut", "the", "door"]);
console.log('should log "door":', resultLastElement2);

//***********************************
//52) Using .push()

function applyPush(array, element) {
  array.push(element);
  return array;
}

var resultArray1 = applyPush([1, 17, 29], 34);
console.log('should log [1, 17, 29, 34]:', resultArray1);

var resultArray2 = applyPush(['abc', 'def'], 'ghi');
console.log('should log ["abc", "def", "ghi"]:', resultArray2);

//***********************************
//53) Using .pop()

function applyPop(array) {
  var result = array.pop();
  return result;
}

var resultElement1 = applyPop([1, 171, 129]);
console.log('should log 129:', resultElement1);

var resultElement2 = applyPop(['islands', 'peninsulas', 'pacific']);
console.log('should log pacific:', resultElement2);

//***********************************
//54) Using unshift()

function applyUnshift(array, element){
  arrayrray.unshift(element);
  return array;
}

var resultArray1 = applyUnshift([7, 9, 4], 1);
console.log('should log [1, 7, 9, 4]:', resultArray1);

var resultArray2 = applyUnshift(['ef', 'hi'], 'bc');
console.log('should log ["bc", "ef", "hi"]:', resultArray2);

//***********************************
//55) Using .shift()

function applyShift(array) {
  var shifted = array.shift();
  return shifted;
}

var resultElement1 = applyShift([1, 171, 129]);
console.log('should log 1:', resultElement1);

var resultElement2 = applyShift(['islands', 'peninsulas', 'pacific']);
console.log('should log islands:', resultElement2);

//***********************************
//56) Using .splice() to add an element
function applySplice(array, index, element) {
  array.splice(index, 0, element);
  return array;
}

var resultArray1 = addAnElementInGeneral([7, 9, 10], 1, 8);
console.log('should log [7, 8 , 9, 10]:', resultArray1);

var resultArray2 = addAnElementInGeneral(['q', 'r', 't'], 2, 's');
console.log('should log ["q", "r", "s", "t"]:', resultArray2);

//***********************************
//57) Using .splice() to remove an element

function removeAnElementInGeneral(array, index) {
  array.splice(index, 1);
  return array;
}

var resultArray1 = removeAnElementInGeneral([8, 9, 10, 'bad entry', 11], 3);
console.log('should log [8, 9, 10, 11]:', resultArray1);

var resultArray2 = removeAnElementInGeneral(['one', 'two', 452, 'three'], 2);
console.log('should log ["one", "two", "three"]:', resultArray2);

//***********************************
//58) Using .splice() to remove and add element

function applySplice(array, index, item1, item2) {
  array.splice(index, 2, item1, item2);
  return array;
}

var resultArray1 = applySplice([8, 9, 10, 'bad entry1', 'bad entry2', 13], 3, 11, 12);
console.log('should log [8, 9, 10, 11, 12, 13]:', resultArray1);

var resultArray2 = applySplice(['one', 'two', 452, 672, 'five'], 2, 'three', 'four');
console.log('should log ["one", "two", "three", "four", "five"]:', resultArray2);

//***********************************
//59) Using Array.isArray()

function isAnArray(input) {
  var result = Array.isArray(input);
  return result;
}

var resultBoolean1 = isAnArray([1, 2, 3]);
console.log('should log true:', resultBoolean1);

var resultBoolean2 = isAnArray({name: 'Tom', friend: 'Jerry'});
console.log('should log false:', resultBoolean2);

//***********************************
//60) Using .slice() in general

function applySlice(array, start, end) {
  var sliceOfArray = array.slice(start, end);
  return sliceOfArray;
}

var array1 = ['Q', 'u', 'e', 'u', 'e'];
var resultOfSlice1 = applySlice(array1, 1, 4);
console.log('should log ["u", "e", "u"]:', resultOfSlice1);

var array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var resultOfSlice2 = applySlice(array2, 2, 8);
console.log('should log [2, 3, 4, 5, 6, 7]:', resultOfSlice2);

//***********************************
//61) Using .slice() to make a copy
function makeACopy(array) {
  var copy = array.slice();
  return copy;
}

var array1 = ['Q', 'u', 'e', 'u', 'e'];
var resultCopy1 = makeACopy(array1);
console.log('should log ["Q", "u", "e", "u", "e"]:', resultCopy1);

var array2 = [0, 1, 2, 3, 4];
var resultCopy2 = makeACopy(array2);
console.log('should log [0, 1, 2, 3, 4]:', resultCopy2);

//***********************************
//62) Using .concat()

function applyConcat(array1, array2) {
  var concat = arra1.concat(array2);
  return concat;
}

var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f']
var resultConcat1 = applyConcat(array1, array2);
console.log('should log ["a", "b", "c", "d", "e", "f"]:', resultConcat1);

var array3 = [1, 2, 3];
var array4 = [4, 5, 6];
var resultConcat2 = applyConcat(array3, array4);
console.log('should log [1, 2, 3, 4, 5, 6]:', resultConcat2);


//***********************************
//63) Using .join()

function usingJoin(arrayOfStrings, string) {
  var joinedString = arrayOfStrings.join(string);
  return joinedString;
}

var resultString1 = applyJoin(['first', 'second', 'third'], '--');
console.log('should log joined string:', resultString1);

var resultString2 = applyJoin(['git', 'commit'], ' ');
console.log('should also log joined string:', resultString2);

//***********************************
//64) Using .split()

function usingSplit(stringToBeSplit, splitter) {
  var splitString = stringToBeSplit.split(splitter);
  return splitString;
}

var resultArray1 = applySplit('first--second--third', '--');
console.log('should log split string:', resultArray1);

var resultArray2 = applySplit('git push origin master', ' ');
console.log('should also log split string:', resultArray2);

//***********************************
//65) Creating an object

function creatingAnObject() {
  var result = {}
  return result;
}

var resultObject = createObject();
console.log('should be an object:', typeof resultObject);
console.log('should not be an array:', Array.isArray(resultObject));

//***********************************
//66) Accessing a property

function accessAPropert(object, key) {
  var result = object[key];
  return result;
}

var resultValue = accessAProperty({machine: 'Computer', type: 'Macbook', ram: '2 GHz'}, 'ram');
console.log('should be "2 GHz":', resultValue);

//***********************************
//67) Reassigning a property

function reassigningProperty(object, key, newValue) {
  object[key] = newValue;
  return object;
}

var resultObject = reassignAProperty({name: 'Ramses', favoriteFood: 'chicken', type: 'dog'}, 'favoriteFood', 'goose');
console.log('should replace "chicken" with "goose":', resultObject);

//***********************************
//68) Using 'delete' to to remove property

function deleteProperty(object, key) {
  delete object[key];
}

var resultObject1 = removeAProperty({q: 9, r: 10, text: 'bad entry'}, 'text');
console.log('should log {q: 9, r: 10}:', resultObject1);

var resultObject2 = removeAProperty({first: 'one', second: 'two', why: 452, third: 'three'}, 'why');
console.log('should log {first: "one", second: "two", third: "three"}:', resultObject2);




































