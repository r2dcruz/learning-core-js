// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

//Brute force solution
function twoSum(array, target) {
    var sum = [];
    
    for (var i = 0; i < array.length; i++) {
      for (var j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === target) {
          sum.push(array[i], array[j]);
        } else {
          return 'No pairs here';
        }
      }
    }
    return sum;
  }
  
  twoSum([3,4,5,6], 9);