const eqArrays = function(array1, array2) {
  // check if both are equal length
  //check is each element is the same
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
// create function that will take in two arrays and console.log an appropriate message to the console
  if( eqArrays(array1, array2) === true) {
    console.log (`👍 👍 👍 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log (`👎 👎 👎 Assertion Failed: ${array1} !== ${array2}`);
  }

};

const without = function (source, itemsToRemove) {
  let newItems = [];

  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.indexOf(source[i]) < 0) {
      newItems.push(source[i]);
    }
  }
  return newItems
};

assertArraysEqual(without([1, 2, 3], [1]),[2, 3]) // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]) 


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
