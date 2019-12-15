//full blown explanation code
function reverse(str) {
  //check input, input validation if we don't assume it is a string
  if (typeof str !== 'string') {
    return 'this is not a string';
  }
  //convert to an array
  //create an empty variable array
  const backwards = [];
  //grab length of the string
  const totalItems = str.length - 1;
  //loop through string
  for (let i = totalItems; i >= 0; i--) {
    //push it to the empty string
    backwards.push(str[i]);
  }  
  //return it back to a string
  return backwards.join('');
}

//more readable function
//using js built in methods
function reverse2(str) {
  return str.split('').reverse().join('');
}

//es6
const reverse3 = str => str.split('').reverse().join('');

reverse('This is good');
reverse2('This is best!');
