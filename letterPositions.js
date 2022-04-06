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
    console.log (`👍 👍 👍 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log (`👎 👎 👎 Assertion Failed: ${array1} !== ${array2}`);
  }

};


const letterPositions = function(sentence) {
  const results = {};
  const stringSplit = sentence.split('');
 
  for (let i = 0; i < stringSplit.length; i++) {
    let letter = stringSplit[i];
    if (letter === " ") {
      continue;
    }
    if (!results[letter]) {
      results[letter] = [];
    }
    results[letter].push(i);

  }
  
  

  return results;
};

//console.log(letterPositions("lighthouse in the house"));
//console.log(letterPositions("hello"));

//assertArraysEqual(letterPositions('hello').l, [2,3]);