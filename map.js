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
  if (eqArrays(array1, array2) === true) {
    console.log(`👍 👍 👍 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`👎 👎 👎 Assertion Failed: ${array1} !== ${array2}`);
  }

};


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word)=> words.length);
console.log(results1);

const results2 = map(words, (word) => words[4]);
console.log(results2);


assertArraysEqual(results1, [ 5, 5, 5, 5, 5 ]);
assertArraysEqual(results2, [ 'tom', 'tom', 'tom', 'tom', 'tom' ]);