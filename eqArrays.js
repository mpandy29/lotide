const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    return `👍 👍 👍 Assertion Passed: ${actual} === ${expected}`;

  } else {
    return `👎 👎 👎 Assertion Failed: ${actual} !== ${expected}`;
  }

};


const eqArrays = function(array1, array2) {
  // check if both are equal length
  //check is each element is the same
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2 [i]) {
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
};


//console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true));