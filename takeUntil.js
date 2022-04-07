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
  
  if (eqArrays(array1, array2) === true) {
    console.log(`👍 👍 👍 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`👎 👎 👎 Assertion Failed: ${array1} !== ${array2}`);
  }

};

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item) === true) {
      return results;
    }
    results.push(item);
    
  }

  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// const data3 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results3 = takeUntil(data3, x => x < 3);
// console.log(results3);


// const data4 = [6, 7, 8, 2, 2, -1, 2, 4, 5];
// const results4 = takeUntil(data4, x => x < 3);
// console.log(results4);

// assertArraysEqual(results3, []);
// assertArraysEqual(results4, [6, 7, 8]);



